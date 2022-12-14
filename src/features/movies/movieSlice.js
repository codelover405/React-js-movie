import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../apis/movieApi';
import { APIKey } from '../../apis/movieapiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieText = "game";
    const response = await movieApi.get(
        `?apikey=${APIKey}&s=${movieText}&type=movie`
    )
    return response.data
});

// Show
export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
        `?apikey=${APIKey}&s=${seriesText}&type=series`
    )
    return response.data
});

// MovieOrShowDetail
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id} &Plot=full`);
        return response.data;
    }
);







const initialState = {
    movies: {},
    shows: {},
    // MovieOrShowDetail
    selectMovieOrShow: {},
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        //standard reducer logic, with auto-generated action types per reducer 
        //addMovie = fetch a async movies

        // addMovie: (state, { payload }) => {
        //     state.movies = payload;
        // },
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            // console.log("panding");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            // console.log("Fetch successfully = fetchAsyncMovies fulfilled");
            return { ...state, movies: payload };
        },



        [fetchAsyncMovies.rejected]: () => {
            // console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            // console.log("Fetch successfully fetchAsyncShows fulfilled");
            return { ...state, shows: payload };
        },

        // MovieOrShowDetail
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            // console.log("Fetch successfully MovieOrShowDetail fulfilled");
            return { ...state, selectMovieOrShow: payload };
        },
    }
})


// export const { addMovie } = movieSlice.actions;
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
//new
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;



