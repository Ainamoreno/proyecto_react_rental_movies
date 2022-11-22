import axios from 'axios';

export const registerUser = async (body) => {

    return await axios.post('http://localhost:7001/users/createUser', body)
    
}