import * as React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useToast, toast } from '../../hooks/use-toast';
import { ToastAction, type ToastActionElement } from '@/components/ui/toast';

// We'll use the parameters that the toast function accepts
type ToastParameters = Parameters<typeof toast>[0];

// Mock data for testing
const mockToastData: ToastParameters = {
  title: 'Test Toast',
  description: 'Test Description',
};

// Mock timers for testing timeouts
jest.useFakeTimers();

describe('useToast', () => {
  beforeEach(() => {
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.toasts.forEach((toast) => {
        result.current.dismiss(toast.id);
      });
    });
  });

  it('should create a toast with correct properties', () => {
    const { result } = renderHook(() => useToast());

    const toastData: ToastParameters = {
      title: 'Test Toast',
      description: 'Test Description',
    };

    act(() => {
      result.current.toast(toastData);
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0]).toMatchObject({
      ...toastData,
      open: true,
    });
    expect(typeof result.current.toasts[0].id).toBe('string');
  });

  it('should enforce toast limit', () => {
    const { result } = renderHook(() => useToast());

    const toastData: ToastParameters = { title: 'Toast' };

    act(() => {
      result.current.toast({ ...toastData, title: 'Toast 1' });
      result.current.toast({ ...toastData, title: 'Toast 2' });
      result.current.toast({ ...toastData, title: 'Toast 3' });
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Toast 3');
  });

  it('should update existing toast', () => {
    const { result } = renderHook(() => useToast());
    let toastId = '';
    const initialToast: ToastParameters = { title: 'Initial Toast' };

    act(() => {
      const response = result.current.toast(initialToast);
      toastId = response.id;
      response.update({ id: toastId, title: 'Updated Toast', open: true });
    });

    expect(result.current.toasts[0].title).toBe('Updated Toast');
    expect(result.current.toasts[0].id).toBe(toastId);
  });

  it('should dismiss toast', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Test Toast' });
    });

    expect(result.current.toasts[0].open).toBe(true);

    act(() => {
      result.current.dismiss(result.current.toasts[0].id);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should dismiss all toasts when no id is provided', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
    });

    expect(result.current.toasts[0].open).toBe(true);
    expect(result.current.toasts[1].open).toBe(true);

    act(() => {
      result.current.dismiss();
    });

    result.current.toasts.forEach(toast => {
      expect(toast.open).toBe(false);
    });
  });

  it('should handle onOpenChange callback', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Test Toast' });
    });

    const toast = result.current.toasts[0];
    expect(toast.open).toBe(true);

    act(() => {
      toast.onOpenChange?.(false);
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should clean up listeners on unmount', () => {
    const { result, unmount } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Test Toast' });
    });

    expect(result.current.toasts).toHaveLength(1);

    unmount();

    const { result: newResult } = renderHook(() => useToast());
    expect(newResult.current.toasts).toHaveLength(1);
  });

  it('should create toast with variant', () => {
    const { result } = renderHook(() => useToast());

    // Test each variant
    const variants: Array<'default' | 'destructive' | 'success'> = ['default', 'destructive', 'success'];

    variants.forEach(variant => {
      act(() => {
        result.current.toast({ ...mockToastData, variant });
      });

      expect(result.current.toasts[0].variant).toBe(variant);
    });
  });

  it('should handle multiple toasts', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
      result.current.toast({ title: 'Toast 3' });
    });

    expect(result.current.toasts).toHaveLength(3);
    expect(result.current.toasts[0].title).toBe('Toast 1');
    expect(result.current.toasts[1].title).toBe('Toast 2');
    expect(result.current.toasts[2].title).toBe('Toast 3');
  });

  it('should dismiss all toasts', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
    });

    expect(result.current.toasts).toHaveLength(2);

    act(() => {
      result.current.dismiss(); // Dismiss all toasts by calling dismiss without arguments
    });

    expect(result.current.toasts.every(toast => !toast.open)).toBe(true);
  });

  it('should handle empty toast data', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast({});
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBeUndefined();
    expect(result.current.toasts[0].description).toBeUndefined();
  });

  it('should handle toast state changes', () => {
    const { result } = renderHook(() => useToast());
    let toastId = '';

    act(() => {
      const response = result.current.toast(mockToastData);
      toastId = response.id;
    });

    const toast = result.current.toasts[0];
    expect(toast.open).toBe(true);

    // Test manual close
    act(() => {
      toast.onOpenChange?.(false);
    });

    expect(result.current.toasts[0].open).toBe(false);

    // Test manual open
    act(() => {
      toast.onOpenChange?.(true);
    });

    expect(result.current.toasts[0].open).toBe(true);
  });

  it('should preserve toast data after update', () => {
    const { result } = renderHook(() => useToast());
    let toastId = '';

    act(() => {
      const response = result.current.toast(mockToastData);
      toastId = response.id;
      response.update({ id: toastId, title: 'Updated Title', open: true });
    });

    const toast = result.current.toasts[0];
    expect(toast.title).toBe('Updated Title');
    expect(toast.description).toBe(mockToastData.description);
    expect(toast.id).toBe(toastId);
  });

  it('should remove toast after delay', () => {
    const { result } = renderHook(() => useToast());

    act(() => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);

    // Dismiss the toast to trigger the removal delay
    act(() => {
      result.current.dismiss();
    });

    // Toast should still be in the list but marked as closed
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].open).toBe(false);

    // Fast-forward past the removal delay
    act(() => {
      jest.advanceTimersByTime(1000000);
    });

    // Toast should be removed
    expect(result.current.toasts).toHaveLength(0);
  });

  afterEach(() => {
    // Clear all timers after each test
    jest.clearAllTimers();
  });

  afterAll(() => {
    // Restore real timers after all tests
    jest.useRealTimers();
  });
});
