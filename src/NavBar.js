import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

function NavBar() {

  return (
    <div id='navBar'>
      <h3>
        <NavLink exact to='/' className='navLinks'>Home</NavLink>
      </h3>
      <h3>
        <NavLink exact to='/recipes' className='navLinks'>My Recipes</NavLink>
      </h3>
      <h3>
        <NavLink exact to='new' className='navLinks'>Add New Recipe</NavLink>
      </h3>
    </div>
  )
}

export default NavBar;