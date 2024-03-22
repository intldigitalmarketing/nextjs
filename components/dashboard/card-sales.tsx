'use client';

import { FaArrowTrendUp } from 'react-icons/fa6';

export default function CardSales() {
  return (
    <>
      <div className="w-full h-full min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200 min-w-[200px]">
        <div className="w-full scroll-auto">
          <div className="flex justify-between mb-4">
            <div className="">
              <h1 className="text-xl font-semibold">Sales</h1>
            </div>
            <div className="flex relative gap-2 items-center">
              <div className="absolute bg-[#c4f1e2] p-2 w-[30px] h-[30px] flex justify-center items-center rounded-full right-2">
                <FaArrowTrendUp size="20px" color="green" />
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden bg-blue-500 rounded-lg py-8 px-12">
            <div className="absolute inset-0 w-full h-full animate-wave bg-gradient-to-r from-blue-700 to-blue-500 opacity-25"></div>
          </div>
        </div>
      </div>
    </>
  );
}
