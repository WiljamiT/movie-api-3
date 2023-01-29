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
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={ <NowPlaying />} />
          <Route path="/marvel" element={ <MovieDetails /> } />
          <Route path="movies/:movieId" element={ <DetailsPage />} />
          <Route path="search" element={ <SearchMoviesPage /> } />
        </Routes>  
      <Footer />
    </div>
  )
}

export default App