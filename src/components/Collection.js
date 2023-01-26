import React from 'react'

import './Collection.css';

import Disney from '../assets/disney.svg'

const Collection = () => {
  return (
    <div className="dynamic-collection">
        <div className="card-link">
            <img className="card-link-img" src={Disney} alt="disney" />
        </div>

        <div className="card-link">
            <img className="card-link-img" src={Disney} alt="disney" />
        </div>

        <div className="card-link">
            <img className="card-link-img" src={Disney} alt="disney" />
        </div>

        <div className="card-link">
            <img className="card-link-img" src={Disney} alt="disney" />
        </div>

        <div className="card-link">
            <img className="card-link-img" src={Disney} alt="disney" />
        </div>

        <div className="card-link">
            <img className="card-link-img" src={Disney} alt="disney" />
        </div>
    </div>
  )
}

export default Collection;