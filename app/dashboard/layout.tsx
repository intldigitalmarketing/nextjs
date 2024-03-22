import { Suspense } from 'react';
import Loading from './loading';
import SideNav from '@/components/dashboard/sidenav';
import CountryDropdown from '@/components/dashboard/country-dropdown';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import { FaSearch } from 'react-icons/fa';
import { MdMicNone } from 'react-icons/md';
import { PiChatTeardropText } from 'react-icons/pi';
import { FaRegBell } from 'react-icons/fa';
import { DarkThemeToggle } from 'flowbite-react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="bg-[#dcdcdc] dark:bg-[#1f1f1f]">
        <div className="flex h-screen flex-col md:flex-row w-full">
          <div className="flex-none md:w-60 bg-white dark:bg-black m-4 rounded-2xl mb-0 md:mb-4">
            <SideNav />
          </div>
          <div className="flex flex-col gap-4 flex-grow m-4 pt-0 md:overflow-y-auto md:ms-0">
            <div className="rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200">
              <div className="border-b-5 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-4">
                <div className="flex">
                  <div className="min-w-[200px] text-start">
                    <h1 className="text-xl font-semibold">Hello Gokul</h1>
                    <p>Welcome Back!</p>
                  </div>
                  <div className="lg:min-w-[380px] w-full lg:w-fit">
                    <form className="w-full mx-auto">
                      <label className="mb-2 text-sm font-medium text-black sr-only dark:text-gray-200">
                        Search
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-[#00e096]">
                          <FaSearch />
                        </div>
                        <input
                          type="search"
                          id="search"
                          className="block w-full p-4 ps-10 text-sm text-black border border-[#00e096] rounded-xl bg-gray-50 focus:ring-[#00e096] focus:border-[#00e096] bg-transparent dark:text-gray-200 placeholder-black dark:placeholder-white"
                          placeholder="Search here..."
                          required
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent text-[#00e096] focus:outline-none cursor-pointer">
                          <MdMicNone size="22px" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="w-full"></div>
                <div className="flex flex-row gap-3">
                  <div className="flex h-[48px]">
                    <DarkThemeToggle />
                  </div>
                  <div className="bg-[#f4f4f4] h-30 w-30 rounded-lg hover:bg-[#edeffc]">
                    <button className="p-2 text-[#49a6f9]">
                      <PiChatTeardropText size="30px" />
                    </button>
                  </div>
                  <div className="bg-[#eaf5ed] h-30 w-30 rounded-lg hover:bg-[#beefdf]">
                    <button className="p-2 text-[#44e3aa]">
                      <FaRegBell size="30px" />
                    </button>
                  </div>
                  <div className="w-full min-w-[180px]">
                    <CountryDropdown />
                  </div>
                </div>
              </div>
            </div>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </div>
        </div>
      </div>
    </SessionProvider>
  );
}
