'use client';

export default function CardWeeklySales() {
  return (
    <>
      <div className="min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200 h-full">
        <div className="mb-4">
          <h1 className="text-xl font-semibold">Weekly Sales</h1>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex justify-between gap-2 w-full">
            <div className="flex flex-col items-center min-w-[33px]">
              <div className="relative w-[20px] bg-gray-200 h-36 rounded-t-sm">
                <div className="absolute rounded-t-md bottom-0 w-full bg-[#fd4827] h-[90%]"></div>
              </div>
              <div className="mt-2">
                <span>Mon</span>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[33px]">
              <div className="relative w-[20px] bg-gray-200 h-36 rounded-t-sm">
                <div className="absolute rounded-t-md bottom-0 w-full bg-[#4f2afc] h-[50%]"></div>
              </div>
              <div className="mt-2">
                <span>Tue</span>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[33px]">
              <div className="relative w-[20px] bg-gray-200 h-36 rounded-t-sm">
                <div className="absolute rounded-t-md bottom-0 w-full bg-[#efa525] h-[60%]"></div>
              </div>
              <div className="mt-2">
                <span>Wed</span>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[33px]">
              <div className="relative w-[20px] bg-gray-200 h-36 rounded-t-sm">
                <div className="absolute rounded-t-md bottom-0 w-full bg-[#44ccf0] h-[40%]"></div>
              </div>
              <div className="mt-2">
                <span>Thu</span>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[33px]">
              <div className="relative w-[20px] bg-gray-200 h-36 rounded-t-sm">
                <div className="absolute rounded-t-md bottom-0 w-full bg-[#2bdd7d] h-[90%]"></div>
              </div>
              <div className="mt-2">
                <span>Fri</span>
              </div>
            </div>
            <div className="flex flex-col items-center min-w-[33px]">
              <div className="relative w-[20px] bg-gray-200 h-36 rounded-t-sm">
                <div className="absolute rounded-t-md bottom-0 w-full bg-[#2f7eb2] h-[40%]"></div>
              </div>
              <div className="mt-2">
                <span>Sat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
