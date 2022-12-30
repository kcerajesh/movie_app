import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Spinner } from '../../components';

import { BiSearch } from 'react-icons/bi';

import * as API from '../../Api';

import './MovieList.scss';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { type } = useParams();
  const { name } = useParams();

  useEffect(() => {
    SearchMoviesByType()
  }, [])

  useEffect(() => {
    SearchMoviesByType()
  }, [type])

  const SearchMoviesByType = async () => {
    setLoading(true);
    const movieList = await API.SearchMoviesByType(type);
    if (movieList && movieList.length > 0) {
      setLoading(false);
      setMovieList(movieList);
    }
  }

  const SearchMovies = async (name) => {
    setLoading(true);
    const movieList = await API.SearchMoviesByName(name);
    if (movieList && movieList.length > 0) {
      setLoading(false);
      setMovieList(movieList);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      SearchMovies(searchTerm);
    }
  }
  return (
      <div className="movie__list">
        <div className="movie__top">
          <h2 className="movie__title">{(name ? name.toUpperCase() : (type ? type : "POPULAR").toUpperCase())}</h2>

          <div className="search">
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              onKeyDown={(event) => handleKeyDown(event)}
              placeholder="Search for movies"
            />
            <BiSearch className="search__icon" onClick={() => SearchMovies(searchTerm)} />
          </div>
        </div>

        {loading ?
          <Spinner />
          :
          <div className="movie__card">
            {
              movieList.map(movie => (
                <Card movie={movie} />
              ))
            }
          </div>
        }
      </div>  
  )
}

export default MovieList