import React from 'react'
import "./CharacterCard.scss"
import noImageAvailable from "../../images/no-image.png"

const CharacterCard = (character, index) => {
  
  return (
    <article key={index} className="card">
      <h2 className="card__heading">{character.name}</h2>
      {character.image ? <img className="card__image" src={character.image} alt={character.name}/> 
        : <img className="card__image" src={noImageAvailable} alt="No Image Available"/>}
      <div className="character-details">
        {character.species ? <p className="trait"><b>Species: </b>{character.species}</p> : <></>}
        {character.gender ? <p className="trait"><b>Gender: </b>{character.gender}</p> : <></>}
        {character.house ? <p className="trait"><b>House: </b>{character.house}</p> : <></>}
        {character.ancestry ? <p className="trait"><b>Ancestry: </b>{character.ancestry}</p> : <></>}
        {character.wand.length ? <p className="trait"><b>Wand: </b>{character.wand.wood + 
          " " + character.wand.core + " " + character.wand.length}</p> : <></>}
        {character.yearOfBirth ? <p className="trait"><b>Year Of Birth: </b>{character.yearOfBirth}</p> : <></>}
        {character.gender ? <p className="trait"><b>Gender: </b>{character.gender}</p> : <></>}
      </div>
      <img src="" alt="" />
    </article>
  )
}

export default CharacterCard;
