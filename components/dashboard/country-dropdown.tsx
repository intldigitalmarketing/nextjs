'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Flag from 'react-flagkit';

export default function CountryDropdown() {
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
        className="bg-transparant text-black dark:text-gray-200 font-semibold py-2 rounded inline-flex items-center justify-between w-full"
        onClick={toggleDropdown}
      >
        <Flag country="IN" size={40} className="mw-40" />
        <span>English (IND)</span>
        <MdKeyboardArrowDown />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-950 rounded-md shadow-lg">
          <div className="py-1 text-center">
            <Link
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 inline-flex gap-2 cursor-pointer"
              href="#"
              onClick={toggleDropdown}
            >
              <Flag country="SG" size={40} className="mw-40" />
              <span>English (SGD)</span>
            </Link>
          </div>
          <div className="py-1 text-center">
            <Link
              className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900 inline-flex gap-2 cursor-pointer"
              href="#"
              onClick={toggleDropdown}
            >
              <Flag country="ID" size={40} className="mw-40" />
              <span>Bahasa (INA)</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
