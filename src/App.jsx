// App.jsx
import './App.css';// App.jsx

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MovieList from './component/MovieList';
import MovieDetails from './component/MovieDetails';
import BookingForm from './component/BookingForm';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch movies from the API
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/movies"
            element={<MovieList movies={movies} onSelect={handleMovieSelect} />}
          />
          <Route
            path="/movies/:id"
            element={<MovieDetails movies={movies} selectedMovie={selectedMovie} />}
          />
          <Route
            path="/booking"
            element={<BookingForm selectedMovie={selectedMovie} />}
          />
          <Route path="/" element={<h2>Home</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
