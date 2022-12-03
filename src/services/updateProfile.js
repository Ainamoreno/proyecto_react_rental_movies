import axios from 'axios';

export const updateProfile = async (body, token) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer '+ token,  
        }
      };

    return await axios.put('https://proyectorentalmovies-production.up.railway.app/users/modifUser', body, config)
    
    
}