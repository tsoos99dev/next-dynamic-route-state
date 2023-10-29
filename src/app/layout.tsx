import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from './nav';
import { AppStoreProvider } from '@/storeProvider';
import { bearData } from '@/data';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dynamic routes',
  description: 'Sstate management with dynamic routes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bears = bearData.map((bear) => ({
    id: bear.id,
    name: bear.name,
  }));

  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex min-h-screen flex-col'>
          <AppStoreProvider bears={bears}>
            <NavBar></NavBar>
            <main className='flex items-center justify-center flex-1 bg-slate-700'>
              {children}
            </main>
          </AppStoreProvider>
        </div>
      </body>
    </html>
  );
}
