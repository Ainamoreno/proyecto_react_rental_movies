import axios from 'axios';

export const loginUser = async (body) => {
    console.log(body)
    return await axios.post('http://localhost:3000/users/loginUser', body)
    
}