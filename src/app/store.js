
import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../Containers/Movies/movieSlice';
import userSlice from '../Containers/User/userSlice';
import serieSlice from '../Containers/Series/serieSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        serie: serieSlice
    }
    
});