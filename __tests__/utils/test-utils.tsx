import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../../components/theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
};

const customRender = async (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  const result = render(ui, { wrapper: AllTheProviders, ...options });
  // Wait for any pending state updates
  await new Promise(resolve => setTimeout(resolve, 0));
  return result;
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
