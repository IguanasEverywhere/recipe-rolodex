import React from 'react';
import styles from './RecipeCard.module.css';
import { Link } from 'react-router-dom';

function RecipeCard({ recipeInfo }) {

  const { name, image, id } = recipeInfo;

  return (
    <Link to={`/recipes/${id}`} className={styles['recipe-card']} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
      <div>
        <h3>{name}</h3>
      </div>
    </Link>
  )
}

export default RecipeCard;

// style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}