import * as React from 'react';
import { renderHook, act as reactHookAct } from '@testing-library/react';
import { useToast, type ToasterToast } from '@/hooks/use-toast';

type ToastResponse = {
  id: string;
  dismiss: () => void;
  update: (props: Partial<ToasterToast>) => void;
};

const mockToastData = {
  title: 'Test Toast',
  description: 'Test Description'
};

describe('useToast', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should add toast', () => {
    const { result } = renderHook(() => useToast());

    reactHookAct(() => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Test Toast');
    expect(result.current.toasts[0].description).toBe('Test Description');
  });

  it('should enforce toast limit of 3', () => {
    const { result } = renderHook(() => useToast());

    reactHookAct(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
      result.current.toast({ title: 'Toast 3' });
      result.current.toast({ title: 'Toast 4' });
    });

    expect(result.current.toasts).toHaveLength(3);
    expect(result.current.toasts[0].title).toBe('Toast 4');
    expect(result.current.toasts[1].title).toBe('Toast 3');
    expect(result.current.toasts[2].title).toBe('Toast 2');
  });

  it('should update existing toast', () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    reactHookAct(() => {
      toastResponse = result.current.toast(mockToastData);
    });

    reactHookAct(() => {
      toastResponse.update({ title: 'Updated Title' });
    });

    expect(result.current.toasts[0].title).toBe('Updated Title');
    expect(result.current.toasts[0].description).toBe('Test Description');
  });

  it('should dismiss specific toast', () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    reactHookAct(() => {
      toastResponse = result.current.toast(mockToastData);
    });

    reactHookAct(() => {
      toastResponse.dismiss();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should dismiss all toasts', () => {
    const { result } = renderHook(() => useToast());

    reactHookAct(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
      result.current.toast({ title: 'Toast 3' });
    });

    reactHookAct(() => {
      result.current.dismiss();
    });

    result.current.toasts.forEach(toast => {
      expect(toast.open).toBe(false);
    });
  });

  it('should remove toast after delay', () => {
    const { result } = renderHook(() => useToast());

    // Clear any existing toasts
    reactHookAct(() => {
      result.current.toasts.forEach((toast) => {
        result.current.dismiss(toast.id);
      });
      jest.advanceTimersByTime(3000); // Clear the removal queue
    });

    reactHookAct(() => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);

    // Dismiss the toast to trigger the removal delay
    reactHookAct(() => {
      result.current.dismiss(result.current.toasts[0].id);
    });

    // Toast should still be in the list but marked as closed
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].open).toBe(false);

    // Fast-forward past the removal delay
    reactHookAct(() => {
      jest.advanceTimersByTime(3000);
    });

    // Toast should be removed
    expect(result.current.toasts).toHaveLength(0);
  });

  it('should handle onOpenChange callback', () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    reactHookAct(() => {
      toastResponse = result.current.toast(mockToastData);
    });

    reactHookAct(() => {
      result.current.toasts[0].onOpenChange?.(false);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should handle existing timeout for toast removal', () => {
    const { result } = renderHook(() => useToast());
    const toastId = result.current.toast(mockToastData).id;

    // Try to add the same toast to removal queue
    reactHookAct(() => {
      result.current.dismiss(toastId);
      result.current.dismiss(toastId);
    });

    reactHookAct(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('should handle remove toast action without toastId', () => {
    const { result } = renderHook(() => useToast());

    reactHookAct(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
    });

    expect(result.current.toasts).toHaveLength(2);

    // Remove all toasts
    reactHookAct(() => {
      result.current.dismiss();
      jest.advanceTimersByTime(3000);
    });

    expect(result.current.toasts).toHaveLength(0);
  });
});
