import React from 'react'

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
            <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>

        <div className="card-link-marvel">
        <a href="marvel"><img className="card-link-img" src={Marvel} alt="disney" /></a>
        </div>

        <div className="card-link-pixar">
        <a href="marvel"><img className="card-link-img" src={Pixar} alt="disney" /></a>
        </div>

        <div className="card-link-sw">
        <a href="marvel"><img className="card-link-img" src={SW} alt="disney" /></a>
        </div>

        <div className="card-link-nf">
        <a href="marvel"><img className="card-link-img" src={Netflix} alt="disney" /></a>
        </div>

        <div className="card-link-ng">
        <a href="marvel"><img className="card-link-img" src={Svg6} alt="disney" /></a>
        </div>
    </div>
  )
}

export default Collection;