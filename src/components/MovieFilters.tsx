'use client';

import type React from 'react';

function MovieFilters() {
  return (
    <div className="flex space-x-4 bg-gray-100 p-4 dark:bg-gray-900">
      <input
        className="flex-1 rounded border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800"
        placeholder="Search..."
        type="text"
      />
      <select className="rounded border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800">
        <option value="">Categories</option>
        <option value="action">Action</option>
        <option value="comedy">Comedy</option>
        {/* Add more categories as needed */}
      </select>
      <select className="rounded border border-gray-300 p-2 dark:border-gray-700 dark:bg-gray-800">
        <option value="">Certification</option>
        <option value="G">G</option>
        <option value="PG">PG</option>
        <option value="PG-13">PG-13</option>
        <option value="R">R</option>
        <option value="NR">NR</option>
      </select>
    </div>
  );
}

export default MovieFilters;
