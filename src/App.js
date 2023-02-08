import React from 'react'

import { Route, Routes } from 'react-router-dom';

import MovieDetails from './components/MovieDetails'

import './App.css'
import Navbar from './components/Navbar'
import NowPlaying from './components/NowPlaying'
import DetailsPage from './components/DetailsPage';
import SearchMoviesPage from './components/SearchMoviesPage';
import Footer from './components/Footer';


const App = () => {

  let querys = ["marvel", "disney", "pixar", "star-wars", "netflix", "national-geographic"];

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <NowPlaying />} />
          <Route path="/marvel" element={ <MovieDetails company={querys[0]} /> } />
          <Route path="/disney" element={ <MovieDetails company={querys[1]}/> } />
          <Route path="/pixar" element={ <MovieDetails company={querys[2]}/> } />
          <Route path="/star-wars" element={ <MovieDetails company={querys[3]}/> } />
          <Route path="/netflix" element={ <MovieDetails company={querys[4]}/> } />
          <Route path="/national-geographic" element={ <MovieDetails company={querys[5]}/> } />
          <Route path="movies/:movieId" element={ <DetailsPage />} />
          <Route path="search" element={ <SearchMoviesPage /> } />
        </Routes>  
      <Footer />
    </div>
  )
}

export default App