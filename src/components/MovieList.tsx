'use client';

import { movies } from './movies';
import type React from 'react';

function MovieList() {
  return (
    <div className="p-4">
      {movies.map((movie) => (
        <div
          className="flex h-16 items-center space-x-4 border-b border-gray-300 p-2 dark:border-gray-700"
          key={movie.id}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt={movie.name}
            className="size-12 rounded"
            src={movie.image.url}
          />
          <span className="flex-1">{movie.name}</span>
          <button className="text-primary">+</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
