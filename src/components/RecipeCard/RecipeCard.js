import React from 'react';
import styles from './RecipeCard.module.css';
import { Link, Route } from 'react-router-dom';

function RecipeCard({ recipeInfo }) {

  const { name, image, url, notes } = recipeInfo;

  return (
    <Link exact to='/'>
      <div className={styles['recipe-card']}>
        <h3>{name}</h3>
        <div className={styles['recipe-card-img']}>
          <img src={image} alt={name}></img>
        </div>

        <a href={url}>Link To Recipe</a>
        <p>Your Notes: {notes}</p>
      </div>
    </Link>
  )


}

export default RecipeCard;