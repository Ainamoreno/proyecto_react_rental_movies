import axios from 'axios';

export const registerUser = async (body) => {
    console.log(body)
    return await axios.post('http://localhost:7001/users/createUser', body)
    
}