import '@/components/global.css'
import { inter } from '@/components/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white h-full antialiased`}>
        {children}
      </body>
    </html>
  );
}
