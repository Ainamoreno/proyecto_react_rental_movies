import axios from 'axios';
const host = 'http://localhost:7001'
export const loginUser = async (body) => {
    return await axios.post(`${host}/users/loginUser`, body)
    
}