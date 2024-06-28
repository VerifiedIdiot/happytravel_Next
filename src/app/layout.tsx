import type { Metadata } from 'next';
import { ReactNode } from 'react';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import StyledComponentsRegistry from '@/lib/registry';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Welcome to my laboratory',
    default: 'Loading . . .',
  },
  description: 'Such a dynamic developer ever',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
