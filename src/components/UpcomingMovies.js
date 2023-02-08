import React, { useState } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import useApiRequest from "./Fetch";
import { Link } from "react-router-dom"

import '../components/styles/NowPlaying.css'


const UpcomingMovies = () => {
  const [page, setPage] = useState(1);
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY

  const { data, error, isLoaded } = useApiRequest(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&page=${page}&region=fi`
  );

  const baseUrl = "http://image.tmdb.org/t/p/w500";
  const errorUrl = "https://via.placeholder.com/150";

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  // console.log(data.results)

  return (
    <>
      <div className="movie-text-infos">
        <h4><b>UPCOMING MOVIES | FIN</b></h4>
        <h4>{`${data.dates.minimum} / ${data.dates.maximum}`}</h4>
      </div>

      <div className="grid-movies-np">
        {data.results.map((item, i) => (
          
          <Link to={`movies/${item.id}`} key={i} className="jee"> 
          <div className="movie-card-details">
          <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
          <h4>{item.original_title}</h4>
            </div>
          </Link>

      
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


    </>
  );
};

export default UpcomingMovies;