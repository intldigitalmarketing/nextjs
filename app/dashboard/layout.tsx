import { Suspense } from 'react';
import Loading from './loading';
import SideNav from '@/app/components/dashboard/sidenav';
import ThemeProviders from '@/app/providers/theme-providers';
import ToastProviders from '@/app/providers/toast-providers';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviders>
      <ToastProviders>
        <div className="bg-white dark:bg-gray-800">
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-3 pt-0 md:overflow-y-auto md:pt-3">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </div>
        </div>
      </ToastProviders>
    </ThemeProviders>
  );
}
