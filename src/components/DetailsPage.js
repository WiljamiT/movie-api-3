import React from 'react'
import { useParams } from 'react-router-dom';
import useApiRequest from "./Fetch";

import "../components/styles/DetailsPage.css"

const RecommendationRow = () => {
  const { movieId } = useParams();

  const posterUrl = "http://image.tmdb.org/t/p/w500"

  const apiKey = process.env.REACT_APP_MOVIE_API_KEY

  const { data, error, isLoaded } = useApiRequest(
      `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`
  );    

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  console.log(data)

  return (
    <div className="recoms">
      <h1>Recommended</h1>
      
      <div className="recoms-container">
        {data.total_pages === 0 ? <p>- No recommendations -</p> : data.results.map((item, i) => (
          <div className="recoms-card" key={i}>
            
            <a href={`/movies/${item.id}`}><img src={posterUrl + item.poster_path} alt={item.title} /><p>{item.title}</p></a>
          </div>
        ))}
        
      </div>
    </div>
  )
}


const DetailsPage = () => {


    const { movieId } = useParams();

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY


    const { data, error, isLoaded } = useApiRequest(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );

    if (error !== null) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    const posterUrl = "http://image.tmdb.org/t/p/w500"
    // console.log(movieId)
    // console.log(data.title)
    // console.log(data)

    console.log(posterUrl + data.backdrop_path);
    console.log(data)

  return (
    <>
      <div className="details-container">
        <div className="poster-image">
          <img src={posterUrl + data.poster_path} alt="asd" />
        </div>

        <div className="backdrop-infos">
          <img src={posterUrl + data.backdrop_path} alt="asd" />
              
            <h1>{data.title}</h1>
            <h2>{data.tagline}</h2>
            <h3>{data.vote_average.toFixed(1)} / 10</h3>
              
          <p>{data.overview}</p>

          <br />
          <p>Check trailer (Youtube): <a href={`https://www.youtube.com/results?search_query=${data.title}`} style={{ color: "cyan"}}>Link</a></p>
          <p>Or open here: </p>
        </div>
      </div>
      <RecommendationRow />
    </>
  )
}

export default DetailsPage