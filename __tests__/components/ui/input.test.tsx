import * as React from 'react';
import { render, screen } from '../../../__tests__/utils/test-utils';
import { Input } from '../../../components/ui/input';

describe('Input Component', () => {
  it('should render correctly with default props', () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('flex h-10 w-full rounded-md border');
  });

  it('should handle different input types', () => {
    const types = ['text', 'password', 'email', 'number', 'file'] as const;
    types.forEach((type) => {
      const { rerender } = render(<Input type={type} data-testid="test-input" />);
      const input = screen.getByTestId('test-input');
      expect(input).toHaveAttribute('type', type);

      if (type === 'file') {
        expect(input).toHaveClass('file:border-0 file:bg-transparent');
      }
    });
  });

  it('should merge custom className with default classes', () => {
    render(<Input className="custom-class" data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('flex h-10 w-full rounded-md border');
  });

  it('should handle disabled state', () => {
    render(<Input disabled data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:cursor-not-allowed disabled:opacity-50');
  });

  it('should forward ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input ref={ref} data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(ref.current).toBe(input);
  });

  it('should handle placeholder text', () => {
    render(<Input placeholder="Test placeholder" />);
    const input = screen.getByPlaceholderText('Test placeholder');
    expect(input).toHaveClass('placeholder:text-muted-foreground');
  });

  it('should pass through additional props', () => {
    render(
      <Input
        data-testid="test-input"
        aria-label="test input"
        maxLength={10}
        required
      />
    );
    const input = screen.getByTestId('test-input');
    expect(input).toHaveAttribute('aria-label', 'test input');
    expect(input).toHaveAttribute('maxLength', '10');
    expect(input).toBeRequired();
  });
});
