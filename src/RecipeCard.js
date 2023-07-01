import React from 'react';

function RecipeCard({ recipeInfo }) {

  const { name, image, url, notes } = recipeInfo;

  return (
    <div>
      <h3>{name}</h3>
      <img src={image} alt={name}></img>
      <a href={url}>{url}</a>
      <p>Your Notes: {notes}</p>
    </div>
  )


}

export default RecipeCard;