import axios from 'axios';

export const getRentals = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token, 
        }
      };
    return await axios.post('https://proyectorentalmovies-production.up.railway.app/rentals/allRentals', body, config)
    
}