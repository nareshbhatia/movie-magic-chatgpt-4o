import { Icons } from './Icons';
import * as Switch from '@radix-ui/react-switch';
import type React from 'react';

function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-gray-900 px-8 text-white">
      <div className="flex items-center space-x-4">
        <Icons.film className="size-6" />
        <h1 className="text-xl font-bold">Movie Magic</h1>
        <nav className="flex space-x-4">
          <a className="hover:underline" href="/movies">
            Movies
          </a>
          <a className="hover:underline" href="/watchlist">
            Watchlist
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Switch.Root className="relative h-[25px] w-[42px] cursor-default rounded-full bg-black shadow-[0_1px_2px] outline-none data-[state=checked]:bg-black">
          <Switch.Thumb className="shadow-blackA4 block size-[21px] translate-x-0.5 rounded-full bg-white shadow-[0_2px_2px] transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[19px]" />
        </Switch.Root>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Profile" className="size-8 rounded-full" src="/avatar.jpg" />
      </div>
    </header>
  );
}

export default Header;
