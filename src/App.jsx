import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

function App() {
    const cards=data.map(item=>{
     return(
      <Card 
        item={item} />
     )
    })

  return (
    <div className="App">
    <Navbar />
    <div className="card-list">
     {cards}
    </div>
  
    </div>
  )
}

export default App
