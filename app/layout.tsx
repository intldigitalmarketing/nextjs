import '@/app/components/global.css';
import { inter } from '@/app/components/fonts';
import AuthProviders from '@/app/providers/auth-providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white antialiased`}>
        <AuthProviders>
          <div className="h-screen">{children}</div>
        </AuthProviders>
      </body>
    </html>
  );
}
