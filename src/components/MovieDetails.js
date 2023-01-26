import React, { useState, useEffect } from "react";
import axios from "axios";

import './MovieDetails.css'

import MovieCard from "./MovieCard";

const MovieDetails = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=marvel').then(response => {
            console.log(response.data.results)
            setMovies(response.data.results)
        }).catch(error => {
            console.log(error)
        })
        
    }, []);

  return (
    <div className="grid-movies">
        {movies.map((movie, i) => {
            return <MovieCard key={i} {...movie} />
        })}
    </div>
  )
}

export default MovieDetails