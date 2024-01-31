import React from 'react';
import { Link } from 'react-router-dom';
import '../component/movieslist.css';
const MovieList = ({ movies, onSelect }) => {
  return (
    <div className='movielist'>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} onClick={() => onSelect(movie)}>
              {movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
