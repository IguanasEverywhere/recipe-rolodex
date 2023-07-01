import React from 'react';

function RecipeCard({ recipeInfo }) {

  const { name, image, url, notes } = recipeInfo;

  return (
    <div className='recipe-card'>
      <h3>{name}</h3>
      <div className='recipe-card-img'>
        <img src={image} alt={name}></img>
      </div>

      <a href={url}>{url}</a>
      <p>Your Notes: {notes}</p>
    </div>
  )


}

export default RecipeCard;