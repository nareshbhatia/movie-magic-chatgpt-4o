import type React from 'react';

const movies = [
  {
    rank: 1,
    title: 'The Shawshank Redemption',
    genres: 'Drama',
    rating: 'R',
    year: 1994,
    runtime: '2:22',
    poster: 'https://link-to-shawshank-poster.jpg',
  },
  {
    rank: 2,
    title: 'The Godfather',
    genres: 'Crime, Drama',
    rating: 'R',
    year: 1972,
    runtime: '2:55',
    poster: 'https://link-to-godfather-poster.jpg',
  },
  {
    rank: 3,
    title: 'The Dark Knight',
    genres: 'Action, Crime, Drama',
    rating: 'PG-13',
    year: 2008,
    runtime: '2:32',
    poster: 'https://link-to-dark-knight-poster.jpg',
  },
  {
    rank: 4,
    title: 'The Godfather Part II',
    genres: 'Crime, Drama',
    rating: 'R',
    year: 1974,
    runtime: '3:22',
    poster: 'https://link-to-godfather-ii-poster.jpg',
  },
  {
    rank: 5,
    title: '12 Angry Men',
    genres: 'Crime, Drama',
    rating: 'NR',
    year: 1957,
    runtime: '1:36',
    poster: 'https://link-to-12-angry-men-poster.jpg',
  },
  {
    rank: 6,
    title: "Schindler's List",
    genres: 'Biography, Drama, History',
    rating: 'R',
    year: 1993,
    runtime: '3:15',
    poster: 'https://link-to-schindlers-list-poster.jpg',
  },
  {
    rank: 7,
    title: 'The Lord of the Rings: The Return of the King',
    genres: 'Action, Adventure, Drama',
    rating: 'PG-13',
    year: 2003,
    runtime: '3:21',
    poster: 'https://link-to-lotr-rotk-poster.jpg',
  },
  {
    rank: 8,
    title: 'Pulp Fiction',
    genres: 'Crime, Drama',
    rating: 'R',
    year: 1994,
    runtime: '2:34',
    poster: 'https://link-to-pulp-fiction-poster.jpg',
  },
];

function MovieList() {
  return (
    <div className="text-white">
      <div className="grid h-10 grid-cols-6 items-center bg-gray-700 px-4">
        <span>#</span>
        <span>Title</span>
        <span>Rating</span>
        <span>Year</span>
        <span>Runtime</span>
        <span>Poster</span>
      </div>
      {movies.map((movie, index) => (
        <div
          className="grid h-28 grid-cols-6 items-center border-b border-gray-700 bg-gray-800 px-4"
          key={index}
        >
          <span>{movie.rank}</span>
          <div>
            <h3 className="font-bold">{movie.title}</h3>
            <p className="text-sm">{movie.genres}</p>
          </div>
          <span>{movie.rating}</span>
          <span>{movie.year}</span>
          <span>{movie.runtime}</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt={movie.title} className="h-24 w-16" src={movie.poster} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
