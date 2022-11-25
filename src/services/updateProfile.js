import axios from 'axios';

export const updateProfile = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };

    return await axios.put('http://localhost:7001/users/modifUser', body, config)
    
    
}