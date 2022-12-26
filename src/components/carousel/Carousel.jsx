import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { FcRating } from 'react-icons/fc';

import './Carousel.scss';

const Carousel = (movies) => {
    const [curIndex, setCurIndex] = useState(0);

    const carouselInfiniteScroll = () => {
        if (curIndex === movies.length - 1) {
            return setCurIndex(0);
        }
        return setCurIndex(curIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            carouselInfiniteScroll()
        }, 3000)

        return () => clearInterval(interval)
    })

    return (
        <>
            <div className="carousel__container">
                {Object.values(movies).map((movie) => {
                    return (<div className="carousel__item" style={{ transform: `translate(-${curIndex * 100}%)` }} key={movie.id}>
                        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
                            <div className="poster__image">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="poster__overlay">
                                <div className="poster__title">{movie ? movie.original_title : ""}</div>
                                <div className="poster__runtime">
                                    {movie ? movie.release_date : ""}
                                    <span className="poster__rating">
                                        {movie ? movie.vote_average : ""}
                                        <FcRating />{" "}
                                    </span>
                                </div>
                                {/* <div className="poster-description">{movie ? movie.overview : ""}</div> */}
                            </div>
                        </Link>
                    </div>)
                })}
            </div>
        </>
    )
}

export default Carousel