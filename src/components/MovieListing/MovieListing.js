import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  // console.log(movies,"I am a Movie");
  console.log(shows, "I am a shows");
  let renderMovies, renderShows = "";

  // Movie
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}></MovieCard>
    ))
  ) : (
    <div className='movies-error'>
      <h3>{movies.Error}</h3>
    </div>
  );

  // shows
  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <MovieCard key={index} data={movie}></MovieCard>
    ))
  ) : (
    <div className='movies-error'>
      <h3>{shows.Error}</h3>
    </div>
  );



  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            {renderMovies}
          </div>
        </div>
        <div className="shows-list">
          <h2>Shows</h2>
          <div className="shows-container">
            {renderShows}
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieListing
