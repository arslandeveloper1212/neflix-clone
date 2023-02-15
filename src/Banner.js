import React from 'react';
import { useEffect, useState } from 'react';
import "./Banner.css"
import axios from './axios';
import Requests from './Requests';


const Banner = () => {

  const [movie, setMovie] = useState([]);
  console.log(movie);

  const fetchData = async () => {
    const response = await axios.get(Requests.requests.fetchNetflixOriginals);
    setMovie(response.data.results[
      Math.floor(Math.random() * response.data.results.length - 1)
    ]);
    return response;
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <header
      className='banner_handle'
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className='banner_contents'>
        <div className='banner_title'><h1>{movie?.name || movie?.originalname || movie?.title}</h1></div>
        <div className='banner_buttons'>
          <div className='banner_button btn'>Play</div>
          <div className='banner_button btn'>My List</div>
        </div>
        <div className='banner_description'>
          <h3>{movie?.overview}</h3>
        </div>
    
      </div>
      <div className='banner_fadebottom'></div>
    </header>
  )
}

export default Banner
