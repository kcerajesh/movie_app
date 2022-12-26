import { useState, useEffect } from 'react';

import * as API from '../../Api';

import { MovieList, Carousel, Spinner} from '../../components';

import './Home.scss';

const Home = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        searchMovies("");
    }, [])

    const searchMovies = async (type) => {
        var data = [];
        setLoading(true)
        data = await API.SearchMoviesByType(type);

        if (data) {
            setLoading(false);
            setMovies(data);
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
                        <MovieList />
                    </div>
                }
            </div>
        </>
    )
}

export default Home;