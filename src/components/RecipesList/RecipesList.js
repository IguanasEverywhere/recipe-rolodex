import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import AddRecipe from '../AddRecipe/AddRecipe';
import styles from './RecipesList.module.css';
import SearchBar from '../SearchBar/SearchBar';

function RecipesList({ recipesToDisplay, onNewRecipe, handleSearchEntry, searchVal }) {



  const recipeCards = recipesToDisplay.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe}></RecipeCard>);

  return (
    <div>
      <SearchBar handleSearchEntry={handleSearchEntry} searchVal={searchVal} />
      <div className={styles['recipe-cards-grid']}>{recipeCards}</div>
      <AddRecipe onNewRecipe={onNewRecipe} />
    </div>
  )
}

export default RecipesList;