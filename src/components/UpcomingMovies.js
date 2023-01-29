import React, { useState } from "react";
import useApiRequest from "./Fetch";

import '../components/styles/NowPlaying.css'


const UpcomingMovies = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoaded } = useApiRequest(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=4d9f60fc73fd30aad1b7e44da04b9806&page=${page}&region=fi`
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
    <>
      <div className="movie-text-infos">
        <h4><b>UPCOMING MOVIES | FIN</b></h4>
        <h5>{`${data.dates.minimum} / ${data.dates.maximum}`}</h5>
      </div>

      <div className="grid-movies-np">
        {data.results.map((item, i) => (
          <a key={i} className="jee" href={`movies/${item.id}`}> 
          <div className="movie-card-details">
          <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
          <h4>{item.original_title}</h4>
            </div>
          </a>

      
        ))}
      </div>


      <div className="pagination">
        <button
            disabled={page === 1}
            onClick={() => setPage((prevState) => prevState - 1, window.scrollTo({top: 460}))}
        >
            Prev
        </button>
            <p>{page} / {data.total_pages}</p>
            <button disabled={page === data.total_pages} onClick={() => setPage((prevState) => prevState + 1, window.scrollTo({top: 1750})) }>
              Next
        </button>

        
       </div> 


    </>
  );
};

export default UpcomingMovies;