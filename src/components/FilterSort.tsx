import type React from 'react';

function FilterSort() {
  return (
    <div className="flex h-14 items-center justify-between bg-gray-800 px-4 text-white">
      <button className="rounded bg-blue-600 px-4 py-2 font-bold text-white hover:bg-blue-700">
        Filter & Sort
      </button>
      <div className="rounded-full bg-gray-700 px-3 py-1 text-white">250</div>
    </div>
  );
}

export default FilterSort;
