import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import AddRecipe from '../AddRecipe/AddRecipe';
import styles from './RecipesList.module.css';

function RecipesList({ recipesToDisplay, onNewRecipe }) {



  const recipeCards = recipesToDisplay.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe}></RecipeCard>);

  return (
    <div>
      <div className={styles['recipe-cards-grid']}>{recipeCards}</div>
      <AddRecipe onNewRecipe={onNewRecipe}/>
    </div>
  )
}

export default RecipesList;