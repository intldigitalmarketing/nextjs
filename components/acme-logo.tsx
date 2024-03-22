import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { poppins } from '@/components/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${poppins.className} flex flex-row items-center leading-none text-black dark:text-gray-200`}
    >
      <div className="bg-[#00e096] me-2 rounded-lg">
        <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      </div>
      <p className="text-[20px] font-semibold">GrowthView</p>
    </div>
  );
}
