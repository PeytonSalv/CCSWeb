'use client';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './stylesGlobals';

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
