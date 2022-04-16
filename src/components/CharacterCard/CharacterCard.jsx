import React from 'react'
import "./CharacterCard.scss"
import noImageAvailable from "../../images/no-image.png"

const CharacterCard = ({character, index}) => {
  const {name, image, species, gender, house, ancestry, wand, yearOfBirth} = character

  return <>
    <article key={index} className="card">
      <h2 className="card__heading">{name}</h2>
      
      {image ? <img className="card__image" src={image} alt={name}/> 
        : <img className="card__image" src={noImageAvailable} alt="No Image Available"/>}

      <div className="character-details">
        {species && <p className="trait"><b>Species: </b>{species}</p>}
        {gender && <p className="trait"><b>Gender: </b>{gender}</p>}
        {house && <p className="trait"><b>House: </b>{house}</p>}
        {ancestry && <p className="trait"><b>Ancestry: </b>{ancestry}</p>}
        {wand.length && <p className="trait"><b>Wand: </b>{wand.wood + 
          " " + wand.core + " " + wand.length}</p>}
        {yearOfBirth && <p className="trait"><b>Year Of Birth: </b>{yearOfBirth}</p>}
      </div>

    </article>
  </>
}

export default CharacterCard;
