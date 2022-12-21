import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';

import { BiSearch } from 'react-icons/bi';

import * as API from '../Api';

import './Movie.scss';

const Movie = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    searchMovies("ALL");
  }, []);

  const searchMovies = async (searchTerm) => {
    if (searchTerm == "") { return }

    if (searchTerm.length > 2) {
      setLoading(true)
      var moviesList = [];
      const data = await API.SearchMoviesByName(searchTerm);
      moviesList = data.Search;

      if (moviesList && moviesList.length > 0) {
        setLoading(false);
        console.log("Movies List: ", data.Search);
        setMovies(moviesList);
      }
    }
  };

  return (
    <div className="app__container">
      <div className="search">
        <input
          style={{ marginLeft: '10px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <BiSearch
          className="search-img"
          onClick={() => searchMovies(searchTerm)} />
      </div>
      {loading ? <div className="loader__container">
        <div className="spinner"></div>
      </div>
        :
        <div className="container">
          {movies?.length > 0 ? (
            <div className="movie__container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default Movie;