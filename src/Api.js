
const API_KEY = "api_key=33f9e0bdf799455550c8182c8c8cde9e";
const API_URL = "https://api.themoviedb.org/3/movie/";

const API_SEARCH = "https://api.themoviedb.org/3/search/movie";

const API_IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_PosterURL = "https://image.tmdb.org/t/p/original/";


export const SearchMoviesByName = async (movieName) => {
    return await fetch(`${API_SEARCH}?${API_KEY}&query=${movieName}`)
    .then(res =>res.json())
    .then(data =>data.results);
};

export const SearchMoviesByType = async (type) => {
    return await fetch(`${API_URL}${type ? type : "popular"}?${API_KEY}`)
        .then(res => res.json())
        .then(data => data.results);
}

export const SearchMoviesByID = async (movieID) => {    
    return await fetch(`${API_URL}${movieID}?${API_KEY}`)
    .then(res => res.json())
    .then(data => data);
}

export const getImageUrl = (path) => {
    return (API_IMG_URL + path);
}

export const getPosterUrl = (movie) => {
    console.log(`${API_PosterURL}${movie && movie.backdrop_path}`)
    return `${API_PosterURL}${movie && movie.backdrop_path}`;
}

