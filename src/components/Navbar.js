import React from 'react'
import './styles/Navbar.css'
import { Link } from "react-router-dom";

import { MdHome, MdSearch, MdStarRate } from "react-icons/md"

const Navbar = () => {
  return (
    <div className="Nav">
      <h2>LOGO</h2>

      <Link to={"/"}><span><MdHome />Home</span></Link>
      <Link to={"/search"}><span><MdSearch />Search</span></Link>
      <Link to={"/"}><span><MdStarRate />Watchlist</span></Link>

      <div className="user-container">
        <Link to={"/"}>Not logged In</Link>
        <img src="https://via.placeholder.com/50" alt="imgOfUser" />
      </div>
      
    </div>
  )
}

export default Navbar