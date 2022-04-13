import React from 'react'
import "./App.scss"
import {characters} from "./data/characters"
import CharacterCard from "./components/CharacterCard/CharacterCard"

const App = () => {
  return <>
    <h1 className="App-header">My Harry Potter Challenge App</h1>
    <div className="card-container">
      {characters.map((character, index) => CharacterCard(character, index))}
    </div>
  </>
}

export default App
