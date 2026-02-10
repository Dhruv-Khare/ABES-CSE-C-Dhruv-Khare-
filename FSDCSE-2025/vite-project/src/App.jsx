import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data,setData]=useState([]);
  async function getFetchData(){
    const res=await fetch('http://localhost:4002/data');
    const jsonData=await res.json();
    setData(jsonData);
  }
  return (
    <>
      {JSON.stringify(data)}
      <button onClick={getFetchData}>fetchData</button>
    </>
  )
}

export default App
