import * as React from 'react';
import { render, screen } from '../../../__tests__/utils/test-utils';
import { Button } from '../../../components/ui/button';

describe('Button Component', () => {
  it('should render correctly with default props', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary');
  });

  it('should render with different variants', () => {
    const { rerender } = render(<Button>Button</Button>);
    const variants = ['destructive', 'outline', 'secondary', 'ghost', 'link'] as const;

    variants.forEach((variant) => {
      rerender(<Button variant={variant}>Button</Button>);
      const button = screen.getByRole('button', { name: 'Button' });

      switch (variant) {
        case 'destructive':
          expect(button).toHaveClass('bg-destructive');
          break;
        case 'outline':
          expect(button).toHaveClass('border-input');
          break;
        case 'secondary':
          expect(button).toHaveClass('bg-secondary');
          break;
        case 'ghost':
          expect(button).toHaveClass('hover:bg-accent');
          break;
        case 'link':
          expect(button).toHaveClass('text-primary');
          break;
      }
    });
  });

  it('should render with different sizes', () => {
    const { rerender } = render(<Button>Button</Button>);
    const sizes = ['default', 'sm', 'lg', 'icon'] as const;

    sizes.forEach((size) => {
      rerender(<Button size={size}>Button</Button>);
      const button = screen.getByRole('button', { name: 'Button' });

      switch (size) {
        case 'default':
          expect(button).toHaveClass('h-10 px-4 py-2');
          break;
        case 'sm':
          expect(button).toHaveClass('h-9');
          break;
        case 'lg':
          expect(button).toHaveClass('h-11');
          break;
        case 'icon':
          expect(button).toHaveClass('h-10 w-10');
          break;
      }
    });
  });

  it('should handle disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });

  it('should merge custom className with default classes', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: 'Custom' });
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveClass('bg-primary'); // Should still have default classes
  });

  it('should render as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Link Button' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('bg-primary');
  });
});