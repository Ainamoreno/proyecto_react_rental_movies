import axios from 'axios';

export const registerUser = async (body) => {

    return await axios.post('https://proyectorentalmovies-production.up.railway.app/users/createUser', body)
    
    
}