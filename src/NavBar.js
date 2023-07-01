import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <div>
      <h3>
        <NavLink to='/'>Home</NavLink>
      </h3>
      <h3>
        <NavLink to='/recipes'>My Recipes</NavLink>
      </h3>
      <h3>
        <NavLink to='new'>Add New Recipe</NavLink>
      </h3>
    </div>
  )
}

export default NavBar;