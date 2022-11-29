import axios from 'axios';

export const searchArticles = async (criteria) => {

    const config = {
        method: 'get',
        url: `http://localhost:7001/movies/movieByName/${criteria}`
    }

    return await axios(config);
}