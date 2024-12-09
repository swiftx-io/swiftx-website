import * as React from 'react';
import { render, screen, cleanup } from '../../../__tests__/utils/test-utils';
import { Input } from '../../../components/ui/input';

describe('Input Component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render correctly with default props', async () => {
    await render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('flex h-10 w-full rounded-md border');
  });

  it('should handle different input types', async () => {
    const types = ['text', 'password', 'email', 'number', 'file'] as const;

    for (const type of types) {
      await render(<Input type={type} data-testid={`test-input-${type}`} />);
      const input = screen.getByTestId(`test-input-${type}`);
      expect(input).toHaveAttribute('type', type);

      if (type === 'file') {
        expect(input).toHaveClass('file:border-0 file:bg-transparent');
      }
      cleanup();
    }
  });

  it('should merge custom className with default classes', async () => {
    await render(<Input className="custom-class" data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toHaveClass('custom-class');
    expect(input).toHaveClass('flex h-10 w-full rounded-md border');
  });

  it('should handle disabled state', async () => {
    await render(<Input disabled data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(input).toBeDisabled();
    expect(input).toHaveClass('disabled:cursor-not-allowed disabled:opacity-50');
  });

  it('should forward ref correctly', async () => {
    const ref = React.createRef<HTMLInputElement>();
    await render(<Input ref={ref} data-testid="test-input" />);
    const input = screen.getByTestId('test-input');
    expect(ref.current).toBe(input);
  });

  it('should handle placeholder text', async () => {
    await render(<Input placeholder="Test placeholder" />);
    const input = screen.getByPlaceholderText('Test placeholder');
    expect(input).toHaveClass('placeholder:text-muted-foreground');
  });

  it('should pass through additional props', async () => {
    await render(
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
