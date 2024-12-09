import * as React from 'react';
import { render, screen } from '../../../__tests__/utils/test-utils';
import {
  Toast,
  ToastProvider,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
} from '../../../components/ui/toast';

describe('Toast Component', () => {
  const TestToast = ({ children, ...props }: React.ComponentProps<typeof Toast>) => (
    <ToastProvider>
      <Toast {...props}>{children}</Toast>
      <ToastViewport />
    </ToastProvider>
  );

  it('should render correctly with title and description', () => {
    render(
      <TestToast>
        <ToastTitle>Test Title</ToastTitle>
        <ToastDescription>Test Description</ToastDescription>
      </TestToast>
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('should render with different variants', () => {
    render(
      <TestToast variant="destructive">
        <ToastTitle>Destructive Toast</ToastTitle>
      </TestToast>
    );

    const toast = screen.getByRole('status');
    expect(toast).toHaveClass('destructive');
  });

  it('should render with success variant', () => {
    render(
      <TestToast variant="success">
        <ToastTitle>Success Toast</ToastTitle>
      </TestToast>
    );

    const toast = screen.getByRole('status');
    expect(toast).toHaveClass('border-green-500');
  });

  it('should render with close button', () => {
    render(
      <TestToast>
        <ToastTitle>Closeable Toast</ToastTitle>
        <ToastClose />
      </TestToast>
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render with action button', () => {
    render(
      <TestToast>
        <ToastTitle>Action Toast</ToastTitle>
        <ToastAction altText="test action">Action</ToastAction>
      </TestToast>
    );

    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('should handle custom className', () => {
    render(
      <TestToast className="custom-test-class">
        <ToastTitle>Custom Class Toast</ToastTitle>
      </TestToast>
    );

    const toast = screen.getByRole('status');
    expect(toast).toHaveClass('custom-test-class');
  });
});
