import axios from 'axios';

export const allRentalsUser = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };
    return await axios.post('https://proyectorentalmovies-production.up.railway.app/rentals/rentalsUser', body, config)
    
}