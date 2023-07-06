import React from 'react';
import { useParams } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import Backdrop from '../Backdrop/Backdrop';
import styles from './RecipeDetail.module.css';

function RecipeDetail({ recipesToDisplay, changeModalVisibility, modalVisible, onDeleteRecipe }) {


  console.log('RecipeDetail mounted')
  const params = parseInt(useParams().recipeId);

  function handleDeleteClick() {
    changeModalVisibility();
  }

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
        <h3>NOTES: {currentRecipe.notes}</h3>
        <button onClick={handleDeleteClick}>Delete This Recipe</button>
        {modalVisible ? <Backdrop /> : null}
        {modalVisible ? <ConfirmModal confirmAction='deleteConfirm' changeModalVisibility={changeModalVisibility} onDeleteRecipe={onDeleteRecipe}/> : null}
      </div>
    )
  }
}

export default RecipeDetail;