import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import styles from './RecipeDetail.module.css';

function RecipeDetail({ recipesToDisplay }) {

  const [modalVisible, setModalVisible] = useState(false);

  console.log('RecipeDetail mounted')
  const params = parseInt(useParams().recipeId);

  function handleDeleteClick() {
    setModalVisible((prevVisibility => !prevVisibility));
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
        {modalVisible ? <ConfirmModal /> : null}
      </div>
    )
  }
}

export default RecipeDetail;