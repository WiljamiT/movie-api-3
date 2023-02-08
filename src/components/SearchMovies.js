// import axios from 'axios';
import React, { useState, useRef } from 'react';
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import useApiRequest from "./Fetch";
import '../components/styles/SearchMovies.css';

const SearchMovies = () => {

    const inputRef = useRef(null);
    

    // const [updated, setUpdated] = useState('');

    const handleKeyUp = (e) => {
      if(e.key === "Enter") {
        setMovieName(inputRef.current.value);
      }
    }

    const handleClick = () => {
      // 👇 "inputRef.current.value" is input value
      setMovieName(inputRef.current.value);
    };

    
  

    const [movieName, setMovieName] = useState("");

    const [page, setPage] = useState(1);

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY
    

    const { data, error, isLoaded } = useApiRequest(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}&page=${page}`
      );

  //     if (error !== null) {
  //   return <div>Error: {error.message}</div>;
  // }
  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }
    
      const baseUrl = "http://image.tmdb.org/t/p/w500";
      const errorUrl = "https://via.placeholder.com/250";

  return (
    <>
        <div className="search-container">
            
            {/* <input placeholder="Search movie by name... " className="movies-input" onChange={(e) => setTimeout(() => {
                setMovieName(e.target.value)
            }, 1000) } /> */}
          <div className="input-container">
            <input ref={inputRef} onKeyUp={handleKeyUp} placeholder="Search movie by name... " className="movies-input" type="text" id="message" name="message" />
            <button onClick={handleClick} className="movies-input-btn">Search</button>
          </div>  
        </div>
        <div className="results-container">
            <h4>{data ? `Found movies: ${data.total_results ? data.total_results : 0}` : `Type to input and search for specific movie e.g. Thor`}</h4>
        </div>
        {!data.results ? <div className="search-notfound"><h1>🔎</h1><h1>🎬</h1><h1>🍿</h1></div> : <div className="grid-movies-np">
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
            <button disabled={page === data.total_pages} onClick={() => setPage((prevState) => prevState + 1, window.scrollTo({top: 10})) }>
              <MdArrowForward />
            </button>

        
       </div>
    </>
  )
}

export default SearchMovies