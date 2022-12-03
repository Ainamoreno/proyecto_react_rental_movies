import axios from 'axios';

export const searchSeries = async (criteria) => {

    const config = {
        method: 'get',
        url: `https://proyectorentalmovies-production.up.railway.app/shows/showByName/${criteria}`
    }

    return await axios(config);
}