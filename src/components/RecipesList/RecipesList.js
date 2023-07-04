import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './RecipesList.module.css';
import SearchBar from '../SearchBar/SearchBar';

function RecipesList({ recipesToDisplay, onNewRecipe, handleSearchEntry, searchVal }) {

console.log('RECIPELIST MOUNTED')

  const recipeCards = recipesToDisplay.map((recipe) => <RecipeCard key={recipe.id} recipeInfo={recipe}></RecipeCard>);

  return (
    <div>
      <SearchBar handleSearchEntry={handleSearchEntry} searchVal={searchVal} />
      <div className={styles['recipe-cards-grid']}>{recipeCards}</div>
    </div>
  )

  // THIS WOULD BREAK IT SIMILARLY TO PROBLEM I HAD IN RECIPE DETAIL. CAN'T RETURN SPECIFIC ELEMENT IF EMPTY?

  // return (
  //   <div>{recipesToDisplay[0].name}</div>
  // )
}

export default RecipesList;