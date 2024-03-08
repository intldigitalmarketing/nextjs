import '@/components/global.css';
import { inter } from '@/components/fonts';
import ToastProviders from '@/providers/toast-providers';
import { Flowbite, ThemeModeScript } from 'flowbite-react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${inter.className} bg-white h-full antialiased`}>
        <ToastProviders>
          <Flowbite>{children}</Flowbite>
        </ToastProviders>
      </body>
    </html>
  );
}
