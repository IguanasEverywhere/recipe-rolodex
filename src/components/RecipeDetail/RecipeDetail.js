import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './RecipeDetail.module.css';

function RecipeDetail({ recipesToDisplay }) {

  console.log('RecipeDetail mounted')
  const params = parseInt(useParams().recipeId);

  if (recipesToDisplay.length === 0) {
    return <h1>Loading...</h1>
  } else {
    console.log('RECIPES TO DISPLAY', recipesToDisplay)
    const currentRecipe = recipesToDisplay.find((recipe) => recipe.id === params);

    return (
      <div className={styles['recipe-detail-body']}>
        <h1>{currentRecipe.name}</h1>
        <img src={currentRecipe.image} alt={currentRecipe.name}></img>
        <a href={currentRecipe.url}>{currentRecipe.url}</a>
        <p>{currentRecipe.notes}</p>

      </div>
    )
  }
}

export default RecipeDetail;