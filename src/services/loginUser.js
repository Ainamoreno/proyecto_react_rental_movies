import axios from 'axios';

export const loginUser = async (body) => {
    return await axios.post('http://localhost:7001/users/loginUser', body)
    
}