import axios from 'axios';

export const searchSeries = async (criteria) => {

    const config = {
        method: 'get',
        url: `http://localhost:7001/shows/showByName/${criteria}`
    }

    return await axios(config);
}