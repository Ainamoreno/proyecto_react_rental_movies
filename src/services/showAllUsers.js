import axios from 'axios';

export const showAllUsers = async (token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token, 
        }
      };
    return await axios.get('https://proyectorentalmovies-production.up.railway.app/users/showAllUsers', config)
    
}