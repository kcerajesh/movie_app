import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import * as API from '../../Api';
import { Spinner } from '../../components';

import { RiEditBoxLine } from 'react-icons/ri';
import { FcRating } from 'react-icons/fc';

import './Movie.scss';

const Movie = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams()

  useEffect(() => {
    searchMoviesByID();
    window.scrollTo(0, 0);
  }, []);

  const searchMoviesByID = async () => {
    setLoading(true);
    const movie = await API.SearchMoviesByID(id);
    if (movie) {
      setLoading(false);
      setMovieDetail(movie);
    }
  }

  return (
    <>
      <div className="container">
        {loading ?
          <Spinner />
          :
          <div className="movie__container">
            <div className="movie__intro">
              <img className="movie__backdrop" src={API.getPosterUrl(movieDetail)} />
            </div>
            <div className="movie">
              <div className="movie__content">
                <div className="movie__poster">
                  <img src={`https://image.tmdb.org/t/p/original${movieDetail ? movieDetail.poster_path : ""}`} />
                </div>
                <div className="movie__detail">
                  <div className="movie__name">{movieDetail ? movieDetail.original_title : ""}</div>
                  <div className="movie-tagline">{movieDetail ? movieDetail.tagline : ""}</div>
                  <div className="movie__rating">
                    {movieDetail ? movieDetail.vote_average : ""}  <FcRating />
                    <span className="movie__vote-count">{movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}</span>
                  </div>
                  <div className="movie__runtime">{movieDetail ? movieDetail.runtime + " mins" : ""}</div>
                  <div className="movie__releaseDate">{movieDetail ? "Release date: " + movieDetail.release_date : ""}</div>
                  <div className="movie__genres">
                    {movieDetail && movieDetail.genres ?
                      movieDetail.genres.map(genre => (
                        <><span className="movie__genre" key={genre.id} id={genre.id}>{genre.name}</span></>
                      )) : ""}
                  </div>
                  <div className='movie__overview'>
                    <div className="synopsis__text">Synopsis</div>
                    {movieDetail ? movieDetail.overview : ""}
                  </div>
                </div>
              </div>
              <div className="movie__heading">Useful Links</div>
              <div className="movie__links">
                {
                  movieDetail && movieDetail.homepage &&
                  <a href={movieDetail.homepage} target="_blank" style={{ textDecoration: "none" }}>
                    <p>
                      <span className="movie__home-button movie__button">Homepage
                        <RiEditBoxLine />
                      </span>
                    </p>
                  </a>
                }
                {
                  movieDetail && movieDetail.imdb_id &&
                  <a href={"https://www.imdb.com/title/" + movieDetail.imdb_id} target="_blank" style={{ textDecoration: "none" }}>
                    <p>
                      <span className="movie__imdb-button movie__button">IMDb
                        <RiEditBoxLine />
                      </span>
                    </p>
                  </a>
                }
              </div>
              <div className="movie__heading">Production companies</div>
              <div className="movie__production">
                {
                  movieDetail && movieDetail.production_companies && movieDetail.production_companies.map(company => (
                    <div>
                      {
                        company.logo_path
                        &&
                        <span className="prod__company">
                          <img src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                          <span>{company.name}</span>
                        </span>
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
};

export default Movie;