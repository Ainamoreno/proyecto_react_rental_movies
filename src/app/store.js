
import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../Containers/Movies/movieSlice';
import userSlice from '../Containers/User/userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice
    }
    
});