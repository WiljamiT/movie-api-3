import React from "react";
import useApiRequest from "./Fetch";

import './NowPlaying.css'

import Collection from '../components/Collection'
import HeroBanner from '../components/HeroBanner'


const NowPlaying = () => {
  const { data, error, isLoaded } = useApiRequest(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=4d9f60fc73fd30aad1b7e44da04b9806"
  );

  const baseUrl = "http://image.tmdb.org/t/p/w500";
  const errorUrl = "https://via.placeholder.com/150";

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  // console.log(data.dates)

  return (
    <>
      <HeroBanner />
      <Collection />
      <div className="grid-movies-np ">
        <h4><b>NOW PLAYING</b></h4>
        <h5>{`${data.dates.minimum} / ${data.dates.maximum}`}</h5>
        {data.results.map((item, i) => (
          <div className="movie-card-details" key={i}>
          <h4>{item.original_title}</h4>
          <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} style={{ width: "50px", height: "50px"}}/>
      </div>
        ))}
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