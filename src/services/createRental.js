import axios from 'axios';

export const createRental = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };
    return await axios.post('http://localhost:7001/rentals/createRental', body, config)
    
}