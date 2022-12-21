import React from 'react';

import './MovieCard.scss';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie">

      <div className="movie-year">
        <p>{Year}</p>
      </div>

      <div className="movie-img">
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div className="movie-desc">
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
      
    </div>
  )
}

export default MovieCard;