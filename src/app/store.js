
import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../Containers/Movies/movieSlice';
import userSlice from '../Containers/User/userSlice';
import serieSlice from '../Containers/Series/serieSlice';
import rentalSlice from '../Containers/Movies/MovieDetails/rentalSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        serie: serieSlice,
        rental: rentalSlice
    }
    
});