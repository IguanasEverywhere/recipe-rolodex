import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './RecipesList.module.css';

function RecipesList({ recipesToDisplay }) {

  const recipeCards = recipesToDisplay.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe}></RecipeCard>);

  return (
    <div>
      <div className={styles['recipe-cards-grid']}>{recipeCards}</div>
    </div>
  )
}

export default RecipesList;