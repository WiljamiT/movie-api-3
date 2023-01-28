import React from 'react'

import { Route, Routes } from 'react-router-dom';

import MovieDetails from './components/MovieDetails'

import './App.css'
import Navbar from './components/Navbar'
import NowPlaying from './components/NowPlaying'
import DetailsPage from './components/DetailsPage';


const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <NowPlaying />} />
          <Route path="/marvel" element={ <MovieDetails /> } />
          <Route path="movies/:movieId" element={ <DetailsPage />} />
        </Routes>  
    </div>
  )
}

export default App