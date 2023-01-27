import React from "react";
import './MovieDetails.css'

import useApiRequest from "./Fetch";

const MovieDetails = () => {
    const { data, error, isLoaded } = useApiRequest(
        "https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=marvel"
      );
      const baseUrl = "http://image.tmdb.org/t/p/w500";
      const errorUrl = "https://via.placeholder.com/150";
    
      if (error !== null) {
        return <div>Error: {error.message}</div>;
      }
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      console.log(data.results)

      return (
        <div className="grid-movies-np">
          <p>MARVEL</p>
          {data.results.map((item, i) => (
            <div className="movie-card-details" key={i}>
            <h4>{item.original_title}</h4>
            <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} style={{ width: "50px", height: "50px"}}/>
        </div>
          ))}
        </div>
      );
}

export default MovieDetails

