import axios from 'axios';

export const getRentals = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token, 
        }
      };
    return await axios.post('http://localhost:7001/rentals/allRentals', body, config)
    
}