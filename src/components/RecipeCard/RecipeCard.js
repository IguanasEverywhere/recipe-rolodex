import React from 'react';
import styles from './RecipeCard.module.css';
import { Link } from 'react-router-dom';

function RecipeCard({ recipeInfo }) {

  const { name, image, notes, id } = recipeInfo;

  return (
    <Link to={`/recipes/${id}`} className={styles['recipe-card']}>
      <div>
        <h3>{name}</h3>
        <div className={styles['recipe-card-img']}>
          <img src={image} alt={name}></img>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard;