import axios from 'axios';

export const createRental = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };
    return await axios.post('https://proyectorentalmovies-production.up.railway.app/rentals/createRental', body, config)
    
}