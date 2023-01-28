import React, { useState } from "react";
import useApiRequest from "./Fetch";

import './NowPlaying.css'

import Collection from '../components/Collection'
import HeroBanner from '../components/HeroBanner'

const NowPlaying = () => {
  const [page, setPage] = useState(1);

  const { data, error, isLoaded } = useApiRequest(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=4d9f60fc73fd30aad1b7e44da04b9806&page=${page}`
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
      <HeroBanner />
      <Collection />
      <div className="movie-text-infos">
        <h4><b>NOW PLAYING</b></h4>
        <h5>{`${data.dates.minimum} / ${data.dates.maximum}`}</h5>
      </div>

      <div className="grid-movies-np">
        {data.results.map((item, i) => (
          <a key={i} className="jee" href={`movies/${item.id}`}> 
          <div className="movie-card-details">
          
            
          <h5>{item.original_title}</h5>
          <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} />
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
            <button disabled={page === data.total_pages} onClick={() => setPage((prevState) => prevState + 1, window.scrollTo({top: 460})) }>
              Next
        </button>

        
       </div> 


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