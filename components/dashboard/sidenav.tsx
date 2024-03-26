'use client';

import AcmeLogo from '@/components/acme-logo';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { LogoutAction } from '@/actions/logout';
import { AiFillPieChart } from 'react-icons/ai';
import { FaChartLine } from 'react-icons/fa6';
import { IoBagRemoveOutline } from 'react-icons/io5';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { PiChatTeardropText } from 'react-icons/pi';
import { FaRegUser } from 'react-icons/fa';
import { PiGear } from 'react-icons/pi';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { HiInboxArrowDown } from 'react-icons/hi2';
import { Button } from 'flowbite-react';

const links = [
  { name: 'Dashboard', href: '/dashboard', icon: AiFillPieChart },
  {
    name: 'Sales Analytics',
    href: '/dashboard/sales-analytics',
    icon: FaChartLine,
  },
  { name: 'Products', href: '/dashboard/products', icon: IoBagRemoveOutline },
  { name: 'Orders', href: '/dashboard/orders', icon: HiOutlineShoppingCart },
  {
    name: 'Messages',
    href: '/dashboard/messages',
    icon: PiChatTeardropText,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: FaRegUser },
  { name: 'Settings', href: '/dashboard/settings', icon: PiGear },
];

export default function SideNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="flex h-full flex-col p-3 md:px-3">
        <Link
          className="md:mt-6 mb-2 md:mb-14 flex items-end justify-start rounded-md"
          href="/"
        >
          <div className="w-32 md:w-40">
            <AcmeLogo />
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-1 overflow-auto">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#00e096] md:flex-none md:justify-start md:p-2 md:px-3 dark:text-gray-200 hover:text-white',
                  {
                    'text-white bg-[#00e096]': pathname === link.href,
                  },
                )}
              >
                <LinkIcon size="18px" />
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
          <div className="grow h-full"></div>
          <div className="grow hidden md:block">
            <div className="bg-[#00e096] py-3 px-0.5 rounded-xl h-auto grid grid-cols-1 gap-4">
              <div className="text-center">
                <HiInboxArrowDown
                  size="2em"
                  color="white"
                  className="items-center justify-center m-auto"
                />
              </div>
              <div className="text-center">
                <p className="text-white items-center justify-center m-auto">
                  New update available click to update
                </p>
              </div>
              <div className="text-center">
                <Button
                  className="text-[#00e096] bg-white rounded-xl items-center justify-center m-auto dark:bg-white"
                  size="xs"
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
          <button
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#00e096] md:flex-none md:justify-start md:p-2 md:px-3 dark:text-gray-200 hover:text-white"
            onClick={async () => {
              const res = await LogoutAction();
              return router.push(res.redirect);
            }}
          >
            <RiLogoutCircleRLine size="18px" />
            <div className="hidden md:block">Log Out</div>
          </button>
        </div>
      </div>
    </>
  );
}
