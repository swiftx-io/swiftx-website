import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '@/components/theme-provider';

describe('test-utils', () => {
  it('should render component with theme provider', () => {
    const TestComponent = () => <div>Test</div>;
    const { container } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    expect(container).toBeTruthy();
  });
});
