import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { FcRating } from 'react-icons/fc';

import './Card.scss';

const Card = ({ movie }) => {
    return (
        <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            <div className="card">
                <img className="card__image" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
                <div className="card__overlay">
                    <div className="card__title">{movie ? movie.original_title : ""}</div>
                    <div className="card__runtime">
                        {movie ? movie.release_date : ""}
                        <span className="card__rating">{movie ? movie.vote_average : ""} <FcRating /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                </div>
            </div>
        </Link>
    )
}

export default Card