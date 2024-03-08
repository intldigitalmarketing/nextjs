'use client';

import AcmeLogo from '@/components/acme-logo';
import {
  CircleStackIcon,
  HomeIcon,
  PowerIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';
import { LogoutAction } from '@/actions/logout';
import { DarkThemeToggle } from 'flowbite-react';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Posts', href: '/dashboard/posts', icon: CircleStackIcon },
];

export default function SideNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col p-3 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 dark:text-black',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <button
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 dark:text-black"
          onClick={async () => {
            const res = await LogoutAction();
            return router.push(res.redirect);
          }}
        >
          <PowerIcon className="w-6" />
          <div className="hidden md:block">Sign Out</div>
        </button>
        <div className="flex h-[48px]">
          <DarkThemeToggle />
        </div>
      </div>
    </div>
  );
}
