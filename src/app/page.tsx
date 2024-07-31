import FilterSort from '@/components/FilterSort';
import Header from '@/components/Header';
import MovieList from '@/components/MovieList';
import type React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <FilterSort />
      <MovieList />
    </div>
  );
}

export default HomePage;
