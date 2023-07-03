import React from 'react';
import {useParams} from 'react-router-dom';



function RecipeDetail({recipesToDisplay}) {

  console.log('hello?')

  const params = parseInt(useParams().recipeId);
  const currentRecipe = recipesToDisplay.find((recipe) => recipe.id === params);

  return (
    <div>
      <h1>{currentRecipe.name}</h1>
    </div>
  )
}

export default RecipeDetail;