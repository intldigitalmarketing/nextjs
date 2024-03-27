'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Image from 'next/image';

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      event.target instanceof Node &&
      !dropdownRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="bg-transparant text-black dark:text-gray-200 font-semibold rounded inline-flex items-center justify-between w-full"
        onClick={toggleDropdown}
      >
        <Image
          src="https://picsum.photos/id/15/200"
          width={30}
          height={30}
          alt="Picture of User"
          className="rounded-full m-2"
        />
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 rounded-md shadow-lg">
          <div className="py-1 text-center">
            <Link
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 inline-flex gap-2 cursor-pointer w-full"
              href="#"
              onClick={toggleDropdown}
            >
              <span>Profile</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
