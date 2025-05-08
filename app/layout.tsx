import type { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyle } from './stylesGlobals';

export const metadata: Metadata = {
  title: 'Cascade Core Solutions',
  description: 'AI-focused web & software development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
