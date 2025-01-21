import { createSlice } from "@reduxjs/toolkit";

const playingMoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayngMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
       
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addUpComingMovies: (state, action) =>{
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.upComingMovies = action.payload;
        },
    }
})
export const {addNowPlayngMovies, addTrailerVideo, addPopularMovies, addUpComingMovies, addTopRatedMovies} = playingMoviesSlice.actions
export default playingMoviesSlice.reducer;