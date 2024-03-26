'use client';

import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });
import { ApexOptions } from 'apexcharts';

export default function CardCustomerSatisfaction() {
  const option: ApexOptions = {
    chart: {
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2'],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    xaxis: {
      categories: [
        '01 February',
        '02 February',
        '03 February',
        '04 February',
        '05 February',
        '06 February',
        '07 February',
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return '' + value;
        },
      },
    },
  };

  const series = [
    {
      name: 'Last Month',
      data: [1500, 1418, 1456, 1526, 1356, 1256],
      color: '#1A56DB',
    },
    {
      name: 'This Month',
      data: [643, 413, 765, 412, 1423, 1731],
      color: '#32e09f',
    },
  ];

  return (
    <>
      <div className="w-full h-full min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200 min-w-[200px]">
        <div className="w-full scroll-auto flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <div className="">
              <h1 className="text-xl font-semibold">Customer Satisfaction</h1>
            </div>
          </div>
          <ApexChart
            type="area"
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
