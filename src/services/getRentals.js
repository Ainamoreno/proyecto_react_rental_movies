import axios from 'axios';

export const getRentals = async (body) => {
    var config = {
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF91c2VyIjo1LCJuYW1lIjoiTG9sYSBNYXJ0w61uZXoiLCJlbWFpbCI6ImxvbGE0NUBnbWFpbC5jb20iLCJjcmVhdGVkIjoxNjY5MDU4MzEyNzI1LCJuYW1lX3JvbCI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE2NjkwNTgzMTJ9.rwD3Sjo3ODvrF_AITizIkoXYYh0GYyxMwaxM_572ysc', 
        }
      };
    return await axios.post('http://localhost:7001/rentals/allRentals', body, config)
    
}