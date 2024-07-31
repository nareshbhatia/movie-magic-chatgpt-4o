import { Switch } from '@radix-ui/react-switch';
import type React from 'react';

function Header() {
  return (
    <header className="flex h-14 items-center justify-between bg-gray-900 px-4 text-white">
      <div className="flex items-center space-x-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="App Logo" className="h-8" src="/logo.png" />
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
        <Switch className="rounded-full bg-gray-700 p-1">Mode</Switch>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="Profile" className="size-8 rounded-full" src="/profile.png" />
      </div>
    </header>
  );
}

export default Header;
