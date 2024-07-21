import Header from '@/components/Header';
import MovieFilters from '@/components/MovieFilters';
import MovieList from '@/components/MovieList';

export default function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <MovieFilters />
      <MovieList />
    </div>
  );
}
