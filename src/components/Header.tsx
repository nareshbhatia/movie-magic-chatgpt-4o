'use client';

import * as Avatar from '@radix-ui/react-avatar';
import { Film } from 'lucide-react';
import { useTheme } from 'next-themes';
import type React from 'react';

function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-14 items-center justify-between bg-gray-900 px-4 text-white dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <Film className="size-6" />
          <span className="text-lg font-bold">Movie Magic</span>
        </div>
        <nav className="flex space-x-4">
          <a className="hover:text-primary" href="/movies">
            Movies
          </a>
          <a className="hover:text-primary" href="/watchlist">
            Watchlist
          </a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <Avatar.Root className="size-8 rounded-full bg-gray-600">
          <Avatar.Image
            alt="User Avatar"
            className="size-full rounded-full"
            src="/avatar.jpg"
          />
          <Avatar.Fallback className="flex size-full items-center justify-center rounded-full">
            U
          </Avatar.Fallback>
        </Avatar.Root>
      </div>
    </header>
  );
}

export default Header;
