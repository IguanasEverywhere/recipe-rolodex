import React from 'react';

function RecipesList({ recipesToDisplay }) {

  const recipeCards = recipesToDisplay.map((recipe) => <li key={recipe.id}>{recipe.name}</li>);

  return (
    <div>
      <h1>RecipesList</h1>
      <div>{recipeCards}</div>
    </div>
  )
}

export default RecipesList;