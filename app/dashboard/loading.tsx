import { Spinner } from 'flowbite-react';

export default function Loading() {
  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="text-dark rounded-md p-4 text-black">
          <Spinner aria-label="" size="xl" />
        </div>
      </div>
    </>
  );
}
