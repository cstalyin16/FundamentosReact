import { useState } from 'react'
import './App.css'

function Pelicula ({titulo}){
  const [esFavorita, setEsFavorita] = useState(false);

  return(
    <div style={{
      border:'1px solid gray',
      borderRadius:'8px',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '5px',
      margin: '8px'
    }} 
    onClick={()=> setEsFavorita(!esFavorita)}>
      <p>{titulo}</p>
      <p>{esFavorita?'⭐':''}</p>
    </div>
  )
}

function App (){
  const pelicula = ['Moana','Dragon ball Broly','Goat','Mulan']
  
  return (
    <>
    <h1>Mis Películas Favoritas</h1>
    {
      pelicula.map((pelicula,indice)=>
      <Pelicula key={indice} titulo={pelicula}/>)
    }
    </>
  )
}


export default App
