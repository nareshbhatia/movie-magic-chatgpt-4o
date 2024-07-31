import { Icons } from './Icons';
import type React from 'react';

function FilterSort() {
  return (
    <div className="flex h-14 items-center justify-between px-8 text-white">
      <button className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Filter & Sort <Icons.listFilter className="ml-2 inline-block size-4" />
      </button>
      <div className="rounded-full bg-gray-700 px-3 py-1 text-white">250</div>
    </div>
  );
}

export default FilterSort;
