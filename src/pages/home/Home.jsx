import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { MovieList, Carousel, Card, Spinner } from '../../components';

import { BiSearch } from 'react-icons/bi';

import * as API from '../../Api';

import './Home.scss';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [title, setTitle] = useState("");

    const { type } = useParams();
    const { searchText } = useParams();

    useEffect(() => {
        SearchMoviesByType("");
    }, []);

    useEffect(() => {
        SearchMoviesByType()
    }, [type]);

    useEffect(() => {
        SearchMoviesByName()
    }, [searchText]);

    const SearchMoviesByType = async () => {
        setLoading(true);
        const movieList = await API.SearchMoviesByType(type);
        if (movieList && movieList.length > 0) {
            setTitle("");
            setSearchTerm("");
            setLoading(false);
            setMovies(movieList);
        }
    }

    const SearchMoviesByName = async () => {
        setLoading(true);
        const movieList = await API.SearchMoviesByName(searchTerm ? searchTerm : searchText);
        if (movieList && movieList.length > 0) {
            setTitle("Search");
            setLoading(false);
            setMovies(movieList);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            SearchMoviesByName(searchTerm);
        }
    }

    return (
        <>
            <div className="home__container">
                {loading ?
                    <Spinner />
                    :
                    <div className="movie__container">
                        {movies.length > 0 && <Carousel {...movies} />}
                        <div className="movie__list">
                            <div className="movie__top">
                                <h2 className="movie__title">{(title ? title.toUpperCase() : (type ? type : "POPULAR").toUpperCase())}</h2>
                                <div className="search">
                                    <input
                                        value={searchTerm}
                                        onChange={(event) => setSearchTerm(event.target.value)}
                                        onKeyDown={(event) => handleKeyDown(event)}
                                        placeholder="Search for movies"
                                    />
                                    <BiSearch className="search__icon" onClick={() => SearchMoviesByName(searchTerm)} />
                                </div>
                            </div>
                            <div className="movie__card">
                                {
                                    movies.map(movie => (
                                        <Card movie={movie} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Home;