import axios from 'axios';

export const searchMovies = async (criteria) => {

    const config = {
        method: 'get',
        url: `https://proyectorentalmovies-production.up.railway.app/movies/movieByName/${criteria}`
    }

    return await axios(config);
}

export const searchMoviesByGenre = async (criteria) => {

    const config = {
        method: 'get',
        url: `https://proyectorentalmovies-production.up.railway.app/movies/movieByGenre/${criteria}`
    }

    return await axios(config);
}
