import React from 'react';
import RecipeCard from './RecipeCard';

function RecipesList({ recipesToDisplay }) {

  const recipeCards = recipesToDisplay.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe}></RecipeCard>);

  return (
    <div>
      <h1>RecipesList</h1>
      <div>{recipeCards}</div>
    </div>
  )
}

export default RecipesList;