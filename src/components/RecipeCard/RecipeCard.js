import React from 'react';
import styles from './RecipeCard.module.css';
import { Link } from 'react-router-dom';

function RecipeCard({ recipeInfo }) {

  const { name, image, url, notes, id } = recipeInfo;

  return (
    <Link to={`/recipes/${id}`}>
      <div className={styles['recipe-card']}>
        <h3>{name}</h3>
        <div className={styles['recipe-card-img']}>
          <img src={image} alt={name}></img>
        </div>
        <p>Your Notes: {notes}</p>
      </div>
    </Link>
  )
}

export default RecipeCard;