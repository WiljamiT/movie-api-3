import React, { useState } from "react";
import useApiRequest from "./Fetch";
import { MdArrowBack, MdArrowForward } from "react-icons/md"
import '../components/styles/NowPlaying.css'

import { Link } from "react-router-dom";

import Collection from '../components/Collection'
import HeroBanner from '../components/HeroBanner'
import UpcomingMovies from "./UpcomingMovies";

const NowPlaying = () => {
  const [page, setPage] = useState(1);
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY

  const { data, error, isLoaded } = useApiRequest(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${page}&region=fi`
  );

  const baseUrl = "http://image.tmdb.org/t/p/w500";
  const errorUrl = "https://via.placeholder.com/250";

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  // console.log(data.results)

  return (
    <>
      <HeroBanner />
      <Collection />
      <div className="movie-text-infos">
        <h2><b>NOW PLAYING | FIN</b></h2>
        <h4>{`${data.dates.minimum} / ${data.dates.maximum}`}</h4>
      </div>

      <div className="grid-movies-np">
        {data.results.map((item, i) => (
          <Link key={i} to={`/movies/${item.id}`}><div className="movie-card-details">
          <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
          <h4>{item.original_title}</h4>
          </div>
          </Link>
        ))}
      </div>

      <div className="pagination">
        <button
            disabled={page === 1}
            onClick={() => setPage((prevState) => prevState - 1, window.scrollTo({top: 900}))}
        >
            <MdArrowBack />
        </button>
            <p>{page} / {!data.total_pages ? 1 : data.total_pages}</p>
            <button disabled={page === data.total_pages || data.total_pages === 1} onClick={() => setPage((prevState) => prevState + 1, window.scrollTo({top: 900})) }>
              <MdArrowForward />
            </button>

        
       </div>

       <UpcomingMovies />


    </>
  );
};

export default NowPlaying;

// todo
// import { FaStar } from "react-icons/fa";

// const createArray = length => [...Array(length)];

// const Star = ({ selected = false }) => (
//   <FaStar color={selected ? "red" : "grey"} />
// );



// function StarRating({ totalStars = 10 }) {
    
//         const [selectedStars] = useState();
//         return (
//           <>
//             {createArray(totalStars).map((n, i) => (
//               <Star key={i} selected={selectedStars > i} />
//             ))}
//             <p className="star-number">
//               {selectedStars} of {totalStars} stars
//             </p>
//           </>
//         );
//       }