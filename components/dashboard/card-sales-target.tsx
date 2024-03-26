'use client';

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';

export default function CardSalesTarget() {
  const option: ApexOptions = {
    colors: ['#32e09f'],
    chart: {
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#E5E7EB',
        },
        dataLabels: {
          show: true,
        },
        hollow: {
          size: '60%',
        },
      },
    },
    labels: ['Achived'],
    legend: {
      show: false,
      position: 'bottom',
    },
    tooltip: {
      enabled: false,
      x: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + '%';
        },
      },
    },
  };

  const series = [82];

  return (
    <>
      <div className="w-full h-full min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200">
        <div className="w-full scroll-auto flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <div className="">
              <h1 className="text-xl font-semibold">Sales Target</h1>
            </div>
          </div>
          <ApexChart
            type="radialBar"
            options={option}
            series={series}
            height="100%"
            width="100%"
            className="max-h-min"
          />
          <div className="text-center font-semibold">Achieved</div>
        </div>
      </div>
    </>
  );
}
