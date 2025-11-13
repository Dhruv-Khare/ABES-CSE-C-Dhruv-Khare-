import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";

import Fashion from "./component/fashion";

function App() {
  const [Cards,setCards] =useState([]);
  
  useEffect(()=>{
    
    fetch('https://fakestoreapi.com/products').then(
      res=>res.json()
    ).then(data=>{
      setCards(data);
    });
    // console.log(response);
  },[])
  console.log(Cards);
  return (
    <div>
      { 
        Cards.map((card,i)=>(
          // console.log(card);
           <Fashion key={i} card={card}/>
        ))
      } 
    </div>
  );
}

export default App;
