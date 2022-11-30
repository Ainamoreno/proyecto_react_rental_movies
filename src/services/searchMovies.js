import axios from 'axios';

export const searchMovies = async (criteria) => {

    const config = {
        method: 'get',
        url: `http://localhost:7001/movies/movieByName/${criteria}`
    }

    return await axios(config);
}

export const searchMoviesByGenre = async (criteria) => {

    const config = {
        method: 'get',
        url: `http://localhost:7001/movies/movieByGenre/${criteria}`
    }

    return await axios(config);
}
