import React from "react";
import { Link } from "react-router-dom";
import '../components/styles/Collection.css';

import Disney from '../assets/disney.svg'
import Marvel from '../assets/marvel.svg'
import Pixar from '../assets/pixar.svg'
import SW from '../assets/star-wars-4.svg'
import Netflix from '../assets/netflix-3.svg'
import Svg6 from '../assets/national-geographic.svg'

const Collection = () => {

  return (
    <div className="dynamic-collection">
        <div className="card-link-disney">
          <Link to={"/disney"}><img className="card-link-img" src={Disney} alt="Disney" /></Link>
        </div>

        <div className="card-link-marvel">
          <Link to={"/marvel"}><img className="card-link-img" src={Marvel} alt="Marvel" /></Link>
        </div>

        <div className="card-link-pixar">
          <Link to={"/pixar"}><img className="card-link-img" src={Pixar} alt="Pixar" /></Link>
        </div>

        <div className="card-link-sw">
          <Link to={"/star-wars"}><img className="card-link-img" src={SW} alt="SW" /></Link>
        </div>

        <div className="card-link-nf">
          <Link to={"/netflix"}><img className="card-link-img" src={Netflix} alt="Netflix" /></Link>
        </div>

        <div className="card-link-ng">
          <Link to={"/national-geographic"}><img className="card-link-img" src={Svg6} alt="National Geographic" /></Link>
        </div>
    </div>
  )
}

export default Collection;