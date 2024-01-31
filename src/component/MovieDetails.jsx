import React from 'react';
import { Link } from 'react-router-dom';
import '../component/movidetails.css'
const MovieDetails = ({ movies, selectedMovie }) => {
  if (!selectedMovie) {
    return <p>Select a movie from the list.</p>;
  }
  const { name, image, summary } = selectedMovie;
  return (
    <div className="movie-details">
      <h2>{name}</h2>
      {image && <img src={image.original} alt={name} />}
      {/* <p>{summary}</p> */}
      <p dangerouslySetInnerHTML={{ __html: summary }} />
      <Link to="/booking">Book Ticket</Link>
    </div>
  );
};

export default MovieDetails;
