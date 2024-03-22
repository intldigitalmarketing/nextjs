'use client';

import { HiChartBar } from 'react-icons/hi2';
import { PiNotebook } from 'react-icons/pi';
import { FaUser } from 'react-icons/fa6';
import { PiCoins } from 'react-icons/pi';
import { FaRegCalendarMinus } from 'react-icons/fa';

const data = [
  {
    id: 1,
    name: 'Total Sales',
    description: '+18% from yesterday',
    amount: '₹ 37,446',
    icon: HiChartBar,
    bgCard: 'bg-[#fcdee1]',
    bgIcon: 'bg-[#f75f80]',
  },
  {
    id: 2,
    name: 'Total Orders',
    description: '+27% from yesterday',
    amount: '365',
    icon: PiNotebook,
    bgCard: 'bg-[#c9fada]',
    bgIcon: 'bg-[#45d65b]',
  },
  {
    id: 3,
    name: 'Total Customers',
    description: '+8% from yesterday',
    amount: '36',
    icon: FaUser,
    bgCard: 'bg-[#e8dafa]',
    bgIcon: 'bg-[#bf86fc]',
  },
  {
    id: 4,
    name: 'Total Earnings',
    description: '+23% from yesterday',
    amount: '₹ 16,285',
    icon: PiCoins,
    bgCard: 'bg-[#f7e5c2]',
    bgIcon: 'bg-[#fc957d]',
  },
];

export default function CardTodaySales() {
  return (
    <>
      <div className="min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200">
        <div className="w-full scroll-auto">
          <div className="flex justify-between">
            <div className="">
              <h1 className="text-xl font-semibold">Today's Sales</h1>
              <span>Sales Summary</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaRegCalendarMinus size="20px" color="blue" />
              <span className="text-md font-semibold">Tue, 05-09-2023</span>
            </div>
          </div>
          <div className="relative overflow-x-auto">
            <div className="flex grow flex-row justify-between overflow-auto gap-4 p-4">
              {data.map((row) => {
                const LinkIcon = row.icon;
                return (
                  <div
                    key={row.id}
                    className={`${row.bgCard} rounded-lg p-3 w-full relative`}
                  >
                    <div
                      className={`${row.bgIcon} absolute p-2 w-[46px] h-[46px] flex justify-center items-center rounded-full`}
                    >
                      <LinkIcon size="18px" color="white" />
                    </div>
                    <div className="text-right flex flex-col gap-3 min-w-[160px] text-black">
                      <div className="font-semibold text-2xl">{row.amount}</div>
                      <div className="font-bold">{row.name}</div>
                      <div className="text-xs text-blue-600">
                        {row.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
