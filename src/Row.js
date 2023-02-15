import axios from './axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import "./Row.css";

const Row = ({title, fetchUrl, isLargeRow = false}) => {


    const [movies, SetMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

   const fetchdata = async () =>{
    const request = await axios.get(fetchUrl);
    SetMovies(request.data.results);
   }

   console.log(movies);

    useEffect(()=>{
        fetchdata();
    },[fetchUrl])

  return (
    <div>
      <div className='row_handle'>
      <h1>{title}</h1>
    <div className='row_posters'>
    {
        movies.map((movie)=>(
            <img 
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key= {movie.id}
            src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
            }`} alt='movie.name'/>
        ))
    } 
    </div>
   

      </div>
    </div>
  )
}

export default Row
