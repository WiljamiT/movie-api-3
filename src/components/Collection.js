import React from "react";

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
            <a href="disney"><img className="card-link-img" src={Disney} alt="Disney" /></a>
        </div>

        <div className="card-link-marvel">
        <a href="marvel"><img className="card-link-img" src={Marvel} alt="Marvel" /></a>
        </div>

        <div className="card-link-pixar">
        <a href="pixar"><img className="card-link-img" src={Pixar} alt="Pixar" /></a>
        </div>

        <div className="card-link-sw">
        <a href="star-wars"><img className="card-link-img" src={SW} alt="SW" /></a>
        </div>

        <div className="card-link-nf">
        <a href="netflix"><img className="card-link-img" src={Netflix} alt="Netflix" /></a>
        </div>

        <div className="card-link-ng">
        <a href="national-geographic"><img className="card-link-img" src={Svg6} alt="National Geographic" /></a>
        </div>
    </div>
  )
}

export default Collection;