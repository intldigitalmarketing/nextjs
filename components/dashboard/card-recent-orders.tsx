'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCircleCheck } from 'react-icons/fa6';
import { FaCircleXmark } from 'react-icons/fa6';

const data = [
  {
    id: 1,
    profileName: 'Kuppuraj',
    profileUrl: 'https://picsum.photos/id/1/200',
    city: 'Coimbatore',
    date: '03-09-2023',
    status: 'Delivered',
    price: '₹ 18,999',
  },
  {
    id: 2,
    profileName: 'Dinesh',
    profileUrl: 'https://picsum.photos/id/2/200',
    city: 'Chennai',
    date: '03-09-2023',
    status: 'Cancelled',
    price: '₹ 2,200',
  },
  {
    id: 3,
    profileName: 'Logu',
    profileUrl: 'https://picsum.photos/id/3/200',
    city: 'Bangalore',
    date: '03-09-2023',
    status: 'Delivered',
    price: '₹ 24,432',
  },
];

export default function CardRecentOrders() {
  return (
    <>
      <div className="w-full h-full min-h-max rounded-2xl bg-white dark:bg-black p-4 text-black dark:text-gray-200 min-w-[200px]">
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between mb-1">
            <div className="">
              <h1 className="text-xl font-semibold">Recent Orders</h1>
            </div>
            <div className="flex relative gap-2 items-center">
              <Link href="#" className="text-blue-500">
                See all
              </Link>
            </div>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="min-w-[150px]">Profile</th>
                  <th className="min-w-[150px]">City</th>
                  <th className="min-w-[120px]">Date</th>
                  <th className="min-w-[150px]">Status</th>
                  <th className="min-w-[120px]">Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => {
                  return (
                    <tr key={row.id}>
                      <td>
                        <div className="flex flex-row items-center">
                          <span>
                            <Image
                              src={row.profileUrl}
                              width={30}
                              height={30}
                              alt={'Picture of ' + row.profileName}
                              className="rounded-full m-2"
                            />
                          </span>
                          <span>{row.profileName}</span>
                        </div>
                      </td>
                      <td>
                        <div className="flex flex-row items-center">
                          <span>
                            <FaLocationDot color="red" className="m-2" />
                          </span>
                          <span>{row.city}</span>
                        </div>
                      </td>
                      <td>{row.date}</td>
                      <td>
                        <div className="flex flex-row items-center">
                          <span>
                            {row.status == 'Delivered' ? (
                              <FaCircleCheck color="green" className="m-2" />
                            ) : (
                              <FaCircleXmark color="red" className="m-2" />
                            )}
                          </span>
                          <span>{row.status}</span>
                        </div>
                      </td>
                      <td>{row.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
