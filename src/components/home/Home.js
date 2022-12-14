import React, { useEffect } from 'react'
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/movieSlice";

const Home = () => {

  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchAsyncMovies());
    dispath(fetchAsyncShows());
  }, [dispath]);
  return (
    <>
      <div className='banner-img'></div>
      <MovieListing />
    </>
  )
}

export default Home
