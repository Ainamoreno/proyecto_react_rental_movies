import axios from 'axios';

export const loginUser = async (body) => {
    return await axios.post('https://proyectorentalmovies-production.up.railway.app/users/loginUser', body)
    
}