// import React, { useState } from 'react'

// import useApiRequest from "./Fetch";

// const DetailsPage = () => {

//     const [page, setPage] = useState(1);


//     const { data, error, isLoaded } = useApiRequest(
//         `https://api.themoviedb.org/3/search/movie?api_key=4d9f60fc73fd30aad1b7e44da04b9806&query=marvel&page=${page}`
//       );
//     const baseUrl = "http://image.tmdb.org/t/p/w500";
//     const errorUrl = "https://via.placeholder.com/150";


//       if (error !== null) {
//         return <div>Error: {error.message}</div>;
//       }
//       if (!isLoaded) {
//         return <div>Loading...</div>;
//       }
//       console.log("MARVEL", data.results, data.total_pages)

//       return (
//         <div className="grid-movies-np">
//           <p>MARVEL</p>
//           {data.results.map((item, i) => (
//             <div className="movie-card-details" key={i}>
//             <h4>{item.original_title}</h4>
//             <img src={item.poster_path ? baseUrl+item.poster_path : errorUrl} alt={item.original_title} style={{ width: "50px", height: "50px"}}/>
//         </div>
//           ))}

//         <button
//             disabled={page === 1}
//             onClick={() => setPage((prevState) => prevState - 1, window.scrollTo({top: 0}))}
//         >
//             Prev
//         </button>
//             <p>{page} / {data.total_pages}</p>
//             <button disabled={page === data.total_pages} onClick={() => setPage((prevState) => prevState + 1, window.scrollTo({top: 0})) }>
//             Next
//         </button>


        

//         </div>
        
//       );
// }

// export default DetailsPage

import React from 'react'
import { useParams } from 'react-router-dom';
import useApiRequest from "./Fetch";

import "../components/styles/DetailsPage.css"


const DetailsPage = () => {
    const { movieId } = useParams();


    const { data, error, isLoaded } = useApiRequest(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=4d9f60fc73fd30aad1b7e44da04b9806`
    );

    const posterUrl = "http://image.tmdb.org/t/p/w500"
    // console.log(movieId)
    // console.log(data.title)
    // console.log(data)

    console.log(posterUrl + data.backdrop_path);
    console.log(data)

    
  return (
    <div className="details-container">
      <div className="poster-image">
        <img src={posterUrl + data.poster_path} alt="asd" />
      </div>

      <div className="backdrop-infos">
        <img src={posterUrl + data.backdrop_path} alt="asd" />
            
          <h1>{data.title}</h1>
          <h2>{data.tagline}</h2>
          <h3>{data.vote_average}</h3>
            
        <p>{data.overview}</p>

        <br />
        <p>Check trailer (Youtube): <a href={`https://www.youtube.com/results?search_query=${data.title}`}>Link</a></p>
        <p>Or open here: </p>
      </div>
              

              










              
            
    
    </div>
  )
}

export default DetailsPage