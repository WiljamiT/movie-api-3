import React from 'react'

import './Collection.css';

import Disney from '../assets/disney.svg'

const Collection = () => {
  return (
    <div className="dynamic-collection">
        <div className="card-link">
            <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>

        <div className="card-link">
        <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>

        <div className="card-link">
        <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>

        <div className="card-link">
        <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>

        <div className="card-link">
        <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>

        <div className="card-link">
        <a href="marvel"><img className="card-link-img" src={Disney} alt="disney" /></a>
        </div>
    </div>
  )
}

export default Collection;