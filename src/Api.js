
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=6fdd3e5";

export const SearchMoviesByName = async (movieName) => {
    const response = await fetch(`${API_URL}&s=${movieName}`);
    const data = await response.json();

    return data;
};