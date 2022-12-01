import axios from 'axios';

export const showAllUsers = async (token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token, 
        }
      };
    return await axios.get('http://localhost:7001/users/showAllUsers', config)
    
}