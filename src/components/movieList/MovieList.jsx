import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Card, Spinner } from '../../components';

import * as API from '../../Api';

import './MovieList.scss';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    SearchMovies()
  }, [])

  useEffect(() => {
    SearchMovies()
  }, [type])

  const SearchMovies = async () => {
    setLoading(true);
    const movieList = await API.SearchMoviesByType(type);
    if (movieList && movieList.length > 0) {
      setLoading(false);
      setMovieList(movieList);
    }
  }

  return (
    <>
      <div className="movie__list">
        <h2 className="movie__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
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
    </>
  )
}

export default MovieList