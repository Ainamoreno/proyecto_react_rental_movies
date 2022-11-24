import axios from 'axios';

export const allRentalsUser = async (body, token) => {
  console.log('Bearer '+token)
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };
    return await axios.post('http://localhost:7001/rentals/rentalsUser', body, config)
    
}