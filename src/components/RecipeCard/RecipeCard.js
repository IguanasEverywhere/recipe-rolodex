import React from 'react';
import styles from './RecipeCard.module.css';

function RecipeCard({ recipeInfo }) {

  const { name, image, url, notes } = recipeInfo;

  return (
    <div className={styles['recipe-card']}>
      <h3>{name}</h3>
      <div className={styles['recipe-card-img']}>
        <img src={image} alt={name}></img>
      </div>

      <a href={url}>{url}</a>
      <p>Your Notes: {notes}</p>
    </div>
  )


}

export default RecipeCard;