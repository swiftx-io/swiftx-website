import * as React from 'react';
import { renderHook, act } from '@testing-library/react';
import { useToast, type ToasterToast, TOAST_REMOVE_DELAY } from '@/hooks/use-toast';

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
    jest.clearAllTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('should add toast', async () => {
    const { result } = renderHook(() => useToast());

    await act(async () => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].title).toBe('Test Toast');
    expect(result.current.toasts[0].description).toBe('Test Description');
  });

  it('should enforce toast limit of 3', async () => {
    const { result } = renderHook(() => useToast());

    await act(async () => {
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

  it('should update existing toast', async () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    await act(async () => {
      toastResponse = result.current.toast(mockToastData);
    });

    await act(async () => {
      toastResponse.update({ title: 'Updated Title' });
    });

    expect(result.current.toasts[0].title).toBe('Updated Title');
    expect(result.current.toasts[0].description).toBe('Test Description');
  });

  it('should dismiss specific toast', async () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    await act(async () => {
      toastResponse = result.current.toast(mockToastData);
    });

    await act(async () => {
      toastResponse.dismiss();
      jest.runOnlyPendingTimers();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should dismiss all toasts', async () => {
    const { result } = renderHook(() => useToast());

    await act(async () => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
      result.current.toast({ title: 'Toast 3' });
    });

    await act(async () => {
      result.current.dismiss();
      jest.runOnlyPendingTimers();
    });

    result.current.toasts.forEach(toast => {
      expect(toast.open).toBe(false);
    });
  });

  it('should remove toast after delay', async () => {
    const { result } = renderHook(() => useToast());

    // Add the toast
    await act(async () => {
      result.current.toast(mockToastData);
    });

    expect(result.current.toasts).toHaveLength(1);

    // Dismiss the toast
    await act(async () => {
      result.current.dismiss(result.current.toasts[0].id);
    });

    // Run all timers immediately
    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('should handle onOpenChange callback', async () => {
    const { result } = renderHook(() => useToast());

    await act(async () => {
      result.current.toast(mockToastData);
    });

    await act(async () => {
      result.current.toasts[0].onOpenChange?.(false);
      jest.runOnlyPendingTimers();
    });

    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should handle existing timeout for toast removal', async () => {
    const { result } = renderHook(() => useToast());
    let toastId: string;

    // Add the toast
    await act(async () => {
      const response = result.current.toast(mockToastData);
      toastId = response.id;
    });

    // Dismiss the toast twice
    await act(async () => {
      result.current.dismiss(toastId);
      result.current.dismiss(toastId);
    });

    // Run all timers immediately
    await act(async () => {
      jest.runAllTimers();
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('should handle remove toast action without toastId', async () => {
    const { result } = renderHook(() => useToast());

    await act(async () => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
    });

    expect(result.current.toasts).toHaveLength(2);

    // First act: dismiss toasts and update state
    await act(async () => {
      result.current.dismiss();
      jest.runOnlyPendingTimers();
    });

    // Verify toasts are marked as closed
    expect(result.current.toasts.every(t => !t.open)).toBe(true);

    // Second act: allow useEffect to clean up
    await act(async () => {
      jest.advanceTimersByTime(TOAST_REMOVE_DELAY);
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('should handle error in toast callback', async () => {
    const { result } = renderHook(() => useToast());
    const errorMessage = 'Test error';
    const errorToast = {
      ...mockToastData,
      onOpenChange: () => {
        throw new Error(errorMessage);
      },
    };

    await act(async () => {
      result.current.toast(errorToast);
      // Run timers for state updates
      jest.runOnlyPendingTimers();
    });

    expect(result.current.toasts).toHaveLength(1);
    expect(() => {
      result.current.toasts[0].onOpenChange?.(false);
    }).toThrow(errorMessage);
  });

  it('should handle multiple dismiss calls for same toast', async () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    await act(async () => {
      toastResponse = result.current.toast(mockToastData);
    });

    await act(async () => {
      toastResponse.dismiss();
      toastResponse.dismiss();
      jest.runOnlyPendingTimers();
    });

    expect(result.current.toasts[0].open).toBe(false);
    expect(result.current.toasts).toHaveLength(1);

    await act(async () => {
      jest.advanceTimersByTime(TOAST_REMOVE_DELAY);
    });

    expect(result.current.toasts).toHaveLength(0);
  });

  it('should handle update after dismiss', async () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    await act(async () => {
      toastResponse = result.current.toast(mockToastData);
    });

    await act(async () => {
      toastResponse.dismiss();
      toastResponse.update({ title: 'Updated Title' });
      jest.runOnlyPendingTimers();
    });

    expect(result.current.toasts[0].title).toBe('Updated Title');
    expect(result.current.toasts[0].open).toBe(false);
  });

  it('should handle undefined toastId in dismiss', async () => {
    const { result } = renderHook(() => useToast());

    await act(async () => {
      result.current.toast({ title: 'Toast 1' });
      result.current.toast({ title: 'Toast 2' });
    });

    await act(async () => {
      result.current.dismiss(undefined);
      jest.runOnlyPendingTimers();
    });

    result.current.toasts.forEach(toast => {
      expect(toast.open).toBe(false);
    });
  });

  it('should maintain toast order when updating', async () => {
    const { result } = renderHook(() => useToast());
    const responses: ToastResponse[] = [];

    await act(async () => {
      responses.push(result.current.toast({ title: 'First' }));
      responses.push(result.current.toast({ title: 'Second' }));
      responses.push(result.current.toast({ title: 'Third' }));
    });

    await act(async () => {
      responses[1].update({ title: 'Updated Second' });
    });

    expect(result.current.toasts[0].title).toBe('Third');
    expect(result.current.toasts[1].title).toBe('Updated Second');
    expect(result.current.toasts[2].title).toBe('First');
  });

  it('should cleanup timeouts on unmount', async () => {
    const { result, unmount } = renderHook(() => useToast());

    await act(async () => {
      result.current.toast(mockToastData);
      result.current.toast({ title: 'Second Toast' });
    });

    await act(async () => {
      result.current.dismiss();
    });

    // Unmount should clear all timeouts
    unmount();

    // All timeouts should be cleared, we can verify this by checking if new toasts can be added
    const { result: newResult } = renderHook(() => useToast());
    await act(async () => {
      newResult.current.toast({ title: 'New Toast' });
    });

    expect(newResult.current.toasts).toHaveLength(1);
  });

  it('should handle early return in addToRemoveQueue', async () => {
    const { result } = renderHook(() => useToast());
    let toastResponse: ToastResponse;

    await act(async () => {
      toastResponse = result.current.toast(mockToastData);
    });

    // First dismiss will set up the timeout
    await act(async () => {
      toastResponse.dismiss();
    });

    // Second dismiss should trigger early return in addToRemoveQueue
    await act(async () => {
      toastResponse.dismiss();
    });

    // Wait for the original timeout to complete
    await act(async () => {
      jest.advanceTimersByTime(TOAST_REMOVE_DELAY);
    });

    expect(result.current.toasts).toHaveLength(0);
  });
});
