'use client';

import type React from 'react';

const movies = [
  { id: 1, name: 'Movie 1', image: '/movie1.jpg' },
  { id: 2, name: 'Movie 2', image: '/movie2.jpg' },
  // Add more movies as needed
];

function MovieList() {
  return (
    <div className="p-4">
      {movies.map((movie) => (
        <div
          className="flex h-16 items-center space-x-4 border-b border-gray-300 p-2 dark:border-gray-700"
          key={movie.id}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={movie.name} className="size-12 rounded" src={movie.image} />
          <span className="flex-1">{movie.name}</span>
          <button className="text-primary">+</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
