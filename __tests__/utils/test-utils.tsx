import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from '../../components/theme-provider';

interface ProvidersProps {
  children: React.ReactNode;
}

const AllTheProviders = ({ children }: ProvidersProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
