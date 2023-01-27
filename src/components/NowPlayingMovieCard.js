// import React, { useState } from 'react'
// import { FaStar } from "react-icons/fa";

// import './MovieCard.css';

// const createArray = length => [...Array(length)];

// const Star = ({ selected = false }) => (
//   <FaStar color={selected ? "red" : "grey"} />
// );


// const NowPlayingMovieCard = ({ original_title, poster_path, vote_average }) => {
//     // console.log(vote_average)
//     function StarRating({ totalStars = 10 }) {
    
//         const [selectedStars] = useState(vote_average);
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
    
//   return (
//     <>
//         <div className="movie-card">
//             <div className="movie-card-details">
//                 <h4>{original_title}</h4>
//                 <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title}/>
//                 <div className="star-rating">
//                     <StarRating />
//                 </div>
//             </div>
//         </div>
//     </>    
    
//   )
// }

// export default NowPlayingMovieCard