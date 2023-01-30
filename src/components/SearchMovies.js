// import axios from 'axios';
import React, { useState } from 'react';
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import useApiRequest from "./Fetch";
import '../components/styles/SearchMovies.css';

const SearchMovies = () => {
    // const [movies, setMovies] = useState("");

    const [movieName, setMovieName] = useState("");

    

    

    const [page, setPage] = useState(1);
    // `https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=${movieName}&page=${page}`
    // const getMovies = () => {
        
    //     axios
    //         .get(`https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=${movieName}&page=${page}`).then(response => {
    //             console.log("VASTAUS APISTA", response.data)
    //             setMovies(response.data)
    //             console.log(page)
    //         })
    //     console.log("INPUTISTA", movieName)
    //   }

    //   const baseUrl = "http://image.tmdb.org/t/p/w500";
    //   const errorUrl = "https://via.placeholder.com/150";

    const { data, error, isLoaded } = useApiRequest(
        `https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=${movieName}&page=${page}`
      );
    
      const baseUrl = "http://image.tmdb.org/t/p/w500";
      const errorUrl = "https://via.placeholder.com/250";

    // const getMovies = () => {
    //     setMovies(data);
    //     console.log("ASDASDSAD")
    // }
      

  return (
    <>
        <div className="search-container">

            <input placeholder="Search movie by name... " className="movies-input" onChange={(e) => setTimeout(() => {
                setMovieName(e.target.value)
            }, 1000) } />

            {/* <button onClick={() => getMovies()}>Search</button> */}
            
        </div>
        <div className="results-container">
            <h4>{data ? `Found movies: ${data.total_results ? data.total_results : 0}` : `Type to input and search for specific movie e.g. Thor`}</h4>
        </div>
        {!data.results ? <div className="grid-movies-np">asd</div> : <div className="grid-movies-np">
        {data.results.map((item, i) => (
          <a key={i} className="jee" href={`movies/${item.id}`}> 
            <div className="movie-card-details">
                <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
                <h4>{item.original_title}</h4>  
            </div>
          </a>
        
      
        ))}
        
      </div>}
      <div className="pagination">
        <button
            disabled={page === 1}
            onClick={() => setPage((prevState) => prevState - 1, window.scrollTo({top: 460}))}
        >
            <MdArrowBack />
        </button>
            <p>{page} / {!data.total_pages ? 1 : data.total_pages}</p>
            <button disabled={page === data.total_pages || data.total_pages === 1} onClick={() => setPage((prevState) => prevState + 1, window.scrollTo({top: 10})) }>
              <MdArrowForward />
            </button>

        
       </div>
    </>
  )
}

export default SearchMovies