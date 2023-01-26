import React from 'react'
import MovieDetails from './components/MovieDetails'

import './App.css'
import Collection from './components/Collection'
import HeroBanner from './components/HeroBanner'

const App = () => {
  return (
    <>
      <div>App</div>
      <HeroBanner />
      <Collection />
      <div className="grid">
        <MovieDetails />
      </div>
      
    </>
  )
}

export default App