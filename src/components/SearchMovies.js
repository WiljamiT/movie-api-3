import axios from 'axios';
import React, { useState } from 'react';

const SearchMovies = () => {
    const [movieName, setMovieName] = useState("Search...");

    const [movies, setMovies] = useState(null);

   

    

    const getMovies = () => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=${movieName}`).then(response => {
                console.log("VASTAUS APISTA", response.data)
                setMovies(response.data)
            })
        console.log("INPUTISTA", movieName)
      }

      const baseUrl = "http://image.tmdb.org/t/p/w500";
      const errorUrl = "https://via.placeholder.com/150";
    

  return (
    <div>
        <input placeholder="Search..." onChange={(e) => setMovieName(e.target.value)} />
        <button onClick={() => getMovies()}>Search</button>

        { movies !== null && <>
            <h3>Results</h3>
        <p>{console.log("ASDASD", movies.results)}</p>
        {movies.results.map((item, i) => (
            <div key={i}>
                <p>{item.original_title}</p>
                <p>{item.poster_path}</p>
                <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
            </div>
        ))}
        </>}

        {
            movies === null && <p>EI LÖYDY</p>
        }
        
    </div>
  )
}

export default SearchMovies