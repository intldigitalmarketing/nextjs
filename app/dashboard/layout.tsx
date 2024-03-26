import { Suspense } from 'react';
import Loading from './loading';
import SideNav from '@/components/dashboard/sidenav';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="bg-[#dcdcdc] dark:bg-[#1f1f1f]">
        <div className="flex h-full min-h-screen flex-col md:flex-row w-full">
          <div className="flex-none md:w-60 bg-white dark:bg-black m-4 rounded-2xl mb-0 md:mb-4">
            <SideNav />
          </div>
          <div className="flex flex-col gap-4 flex-grow m-4 pt-0 md:ms-0">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
