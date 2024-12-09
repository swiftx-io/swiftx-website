import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
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

    act(() => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Test Toast');
    expect(result.current.toasts[0].description).toBe('Test Description');
  });

  it('should enforce toast limit of 3', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
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

    act(() => {
      toastResponse = result.current.toast(mockToastData);
    });

    act(() => {
      toastResponse.update({ title: 'Updated Title' });
    });

    expect(result.current.toasts[0].title).toBe('Updated Title');
    expect(result.current.toasts[0].description).toBe('Test Description');
  });

  it('should dismiss specific toast', () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    act(() => {
      toastResponse = result.current.toast(mockToastData);
    });

    act(() => {
      toastResponse.dismiss();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should dismiss all toasts', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
      result.current.toast({ title: 'Toast 3' });
    });

    act(() => {
      result.current.dismiss();
    });

    result.current.toasts.forEach(toast => {
      expect(toast.open).toBe(false);
    });
  });

  it('should remove toast after delay', () => {
    const { result } = renderHook(() => useToast());

    // Clear any existing toasts
    act(() => {
      result.current.toasts.forEach((toast) => {
        result.current.dismiss(toast.id);
      });
      jest.advanceTimersByTime(3000); // Clear the removal queue
    });

    act(() => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);

    // Dismiss the toast to trigger the removal delay
    act(() => {
      result.current.dismiss(result.current.toasts[0].id);
    });

    // Toast should still be in the list but marked as closed
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].open).toBe(false);

    // Fast-forward past the removal delay
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Toast should be removed
    expect(result.current.toasts).toHaveLength(0);
  });
});
