import React, { useState } from "react";
import useApiRequest from "./Fetch";

import { MdArrowBack, MdArrowForward } from "react-icons/md"

const MovieDetails = ({company}) => {

    const [page, setPage] = useState(1);

    const { data, error, isLoaded } = useApiRequest(
        `https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=${company}&page=${page}`
      );
      console.log(company)
    const baseUrl = "http://image.tmdb.org/t/p/w500";
    const errorUrl = "https://via.placeholder.com/150";


      if (error !== null) {
        return <div>Error: {error.message}</div>;
      }
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      console.log("MARVEL", data.results, data.total_pages)

      return (
        <div className="hero">
        <div className="movie-text-infos">
          <h1>{company === "star-wars" ? "Star Wars" : company && company === "national-geographic" ? "National Geographic" : company}</h1>
        </div>
        <div className="grid-movies-np">
          
          {data.results.map((item, i) => (
            <div className="movie-card-details" key={i}>
            
            <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
            <h4>{item.original_title}</h4>
        </div>
          ))}
        </div>
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
        
        </div>
      );
}

export default MovieDetails

