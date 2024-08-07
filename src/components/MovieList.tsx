import type React from 'react';

const movies = [
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    genres: 'Drama',
    rating: 'R',
    year: 1994,
    runtime: '2:22',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg',
  },
  {
    rank: 2,
    title: 'The Godfather',
    genres: 'Crime, Drama',
    rating: 'R',
    year: 1972,
    runtime: '2:55',
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    rank: 3,
    title: 'The Dark Knight',
    genres: 'Action, Crime, Drama',
    rating: 'PG-13',
    year: 2008,
    runtime: '2:32',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    rank: 4,
    title: 'The Godfather Part II',
    genres: 'Crime, Drama',
    rating: 'R',
    year: 1974,
    runtime: '3:22',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    rank: 5,
    title: '12 Angry Men',
    genres: 'Crime, Drama',
    rating: 'NR',
    year: 1957,
    runtime: '1:36',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
  },
  {
    rank: 6,
    title: "Schindler's List",
    genres: 'Biography, Drama, History',
    rating: 'R',
    year: 1993,
    runtime: '3:15',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
  },
  {
    rank: 7,
    title: 'The Lord of the Rings: The Return of the King',
    genres: 'Action, Adventure, Drama',
    rating: 'PG-13',
    year: 2003,
    runtime: '3:21',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    rank: 8,
    title: 'Pulp Fiction',
    genres: 'Crime, Drama',
    rating: 'R',
    year: 1994,
    runtime: '2:34',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
];

function MovieList() {
  return (
    <div className="px-8 text-white">
      <header className="w-full border-b">
        <div className="flex items-center gap-x-3 px-2 py-3 text-sm leading-none">
          <div className="mr-2 hidden w-8 shrink-0 text-right sm:block">#</div>
          <div className="w-16 flex-1 shrink-0 ">Title</div>
          <div className="hidden w-12 shrink-0 text-center sm:block">
            Rating
          </div>
          <div className="hidden w-12 shrink-0 text-right sm:block">Year</div>
          <div className="hidden w-12 shrink-0 text-right sm:block">
            Runtime
          </div>
        </div>
      </header>
      <div className="relative w-full overflow-auto py-2">
        {movies.map((movie, index) => (
          <div
            className="flex items-center gap-x-3 rounded-md p-2 text-sm"
            key={index}
          >
            <span className="mr-2 w-8 shrink-0 text-right">{movie.rank}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={movie.title}
              className="h-24 w-16 shrink-0 object-cover"
              src={movie.poster}
            />
            <div className="mr-6 min-w-0 flex-1 overflow-hidden">
              <h3 className="font-bold">{movie.title}</h3>
              <p className="text-sm">{movie.genres}</p>
            </div>
            <span className="w-12 shrink-0 text-center">{movie.rating}</span>
            <span className="w-12 shrink-0 text-right">{movie.year}</span>
            <span className="w-12 shrink-0 text-right">{movie.runtime}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
