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
       getRentals({email}).then((res)=> {
        console.log(res)
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
