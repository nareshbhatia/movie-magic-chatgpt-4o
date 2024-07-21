import { AppProvider } from '@/providers';
import type { Metadata } from 'next';
import { Inter, Roboto_Mono as RobotoMono } from 'next/font/google';
import './global.css';

/*
 * Load the fonts using next/font/google. For details, see
 * https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#with-tailwind-css
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});
const robotoMono = RobotoMono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: 'Movie Magic',
  description: 'A movie streaming application',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      className={`${inter.variable} ${robotoMono.variable} dark:bg-gray-900 dark:text-white`}
      lang="en"
      suppressHydrationWarning
    >
      <body className="dark:bg-gray-900 dark:text-white">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
