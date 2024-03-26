'use client';

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';

export default function CardProductClass() {
  const option: ApexOptions = {
    labels: ['Electronics', 'Cloths', 'Beauty Care', 'Books', 'Toys'],
    colors: ['#fc4827', '#4c27fc', '#fca825', '#46cdf0', '#2cdd7d'],
    stroke: {
      colors: ['transparent'],
    },
    grid: {
      padding: {
        top: 2,
      },
    },
    legend: {
      position: 'left',
    },
    plotOptions: {
      pie: { donut: { size: '65%' } },
    },
  };

  const series = [30, 25, 20, 15, 10];

  return (
    <>
      <div className="w-full h-full min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200 min-w-[200px]">
        <div className="w-full scroll-auto flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <div className="">
              <h1 className="text-xl font-semibold">Product Class</h1>
            </div>
          </div>
          <ApexChart
            type="donut"
            options={option}
            series={series}
            height="100%"
            width="100%"
            className="max-h-min"
          />
        </div>
      </div>
    </>
  );
}
