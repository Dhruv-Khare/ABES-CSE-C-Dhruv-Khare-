import React from 'react'
import './fashion.css'

function Fashion({card}) {
    console.log(card);
  return (
    <div id='card'>

        <img src={card.image} alt="" width={100} height={100}/>
        <h4>Title: {card.title}</h4>
        <h4>Price: {card.price}</h4>

    </div>
  )
}

export default Fashion