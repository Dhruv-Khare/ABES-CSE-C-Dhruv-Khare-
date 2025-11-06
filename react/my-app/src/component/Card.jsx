import React from 'react'
import './card.css'
function Card({name,imgSrc, rate}) {
  return (

    <div id="card">
        <h2 >{name}</h2>
        <img src={imgSrc} alt="" height={200} width={200}/>
        <h3>{rate}</h3>
    </div>
  )
}

export default Card