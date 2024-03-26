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
        <div className="grid grid-cols-1 md:grid-cols-12 h-full min-h-screen w-full">
          <div className="col-span-1 md:col-span-4 lg:col-span-3 xl:col-span-2 bg-white dark:bg-black m-4 rounded-2xl mb-0 md:mb-4">
            <SideNav />
          </div>
          <div className="col-span-1 md:col-span-8 lg:col-span-9 xl:col-span-10 flex flex-col gap-4 flex-grow m-4 pt-0 md:ms-0">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
