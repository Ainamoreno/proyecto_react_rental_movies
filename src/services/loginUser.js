import axios from 'axios';
const host = 'proyectorentalmovies-production.up.railway.app'
export const loginUser = async (body) => {
    return await axios.post(`${host}/users/loginUser`, body)
    
}