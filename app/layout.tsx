// app/layout.tsx
import type { Metadata } from 'next';
import { StyledComponentsRegistry } from '@/lib/registry';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  title: 'Cascade Core Solutions',
  description: 'AI-focused web & software development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
