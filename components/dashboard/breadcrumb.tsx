'use client';

import { Breadcrumb as BreadcrumbFlowbite } from 'flowbite-react';
import { BreadcrumbItem } from '@/lib/interface';

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <>
      <div className="flex justify-end gap-3">
        <BreadcrumbFlowbite>
          {items.map((item, index) =>
            index === items.length - 1 ? (
              <BreadcrumbFlowbite.Item key={index}>
                {item.text}
              </BreadcrumbFlowbite.Item>
            ) : (
              <BreadcrumbFlowbite.Item key={index} href={item.href}>
                {item.text}
              </BreadcrumbFlowbite.Item>
            ),
          )}
        </BreadcrumbFlowbite>
      </div>
    </>
  );
}
