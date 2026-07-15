import { useState } from 'react'
import './App.css'

function Pelicula ({titulo}){
  const [esFavorita, setEsFavorita] = useState(false);

  return(
    <div onClick={()=> setEsFavorita(!esFavorita)}>
      <p>{titulo}{esFavorita?'⭐':''}</p>
    </div>
  )
}

function App (){
  return (
    <>
    <h1>Mis Películas Favoritas</h1>

    <Pelicula titulo={'Amazing Spider-Man 2'}></Pelicula>
    </>
  )
}


export default App
