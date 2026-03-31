import { RocketLaunchIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function Logo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <RocketLaunchIcon className="h-11 w-11 -rotate-[12deg]" />
      <p className="text-[38px]">NovaDash</p>
    </div>
  );
}
