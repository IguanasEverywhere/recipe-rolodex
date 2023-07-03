import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'



function NavBar() {

  return (
    <div className={styles.navBar}>
      <h3>
        <NavLink exact to='/' className={styles.navLinks} activeClassName={styles.active}>Home</NavLink>
      </h3>
      <h3>
        <NavLink exact to='/recipes' className={styles.navLinks} activeClassName={styles.active}>My Recipes</NavLink>
      </h3>
      <h3>
        <NavLink exact to='new' className={styles.navLinks} activeClassName={styles.active}>Add New Recipe</NavLink>
      </h3>
    </div>
  )
}

export default NavBar;