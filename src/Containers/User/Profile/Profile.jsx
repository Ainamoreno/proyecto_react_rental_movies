import React from "react";
import { getRentals } from "../../../services/getRentals";

//Redux
import { useSelector, useDispatch } from "react-redux";

//Slice
import { userData, login } from "../userSlice";

const Profile = () => {
  const credentials = useSelector(userData);
  const showRentals = () => {
    let email = credentials.credentials.email
    if(credentials.credentials.name_rol === 'Administrador'){
       getRentals({email}, credentials.token).then((res)=> {
        console.log(res.data)
       }); 
    }else{
        console.log('No estás autorizado')
    }
    
  };
  return (
    <div>
      <div className="">soy el perfil de usuario</div>
      <div onClick={() => showRentals()}>Todos los alquileres</div>
    </div>
  );
};
export default Profile;
