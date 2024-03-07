'use client';

import Link from 'next/link';
import { BreadcrumbItem } from '@/lib/interface';

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <div className="flex justify-end gap-3">
        <div className="breadcrumbs text-sm">
          <ul>
            {items.map((item, index) => (
              <li key={index} className="">
                {index === items.length - 1 ? (
                  <span>{item.text}</span>
                ) : (
                  <Link href={item.href}>{item.text}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
