import React from 'react'
import './styles/Navbar.css'

import { MdHome, MdSearch, MdStarRate } from "react-icons/md"

const Navbar = () => {
  return (
    <div className="Nav">
      <h2>LOGO</h2>


      <a href="/" alt="asd"><span><MdHome />Home</span></a>
      <a href="/search" alt="asd"><span><MdSearch />Search</span></a>
      <a href="#asd" alt="asd"><span><MdStarRate />Watchlist</span></a>

      <div className="user-container">
        <a>Not logged In</a>
        <img src="https://via.placeholder.com/50" alt="imgOfUser" />
      </div>
      
    </div>
  )
}

export default Navbar