import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import RecipesList from './components/RecipesList/RecipesList';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import AddRecipe from './components/AddRecipe/AddRecipe';
import styles from './App.module.css'

function App() {

  const [recipesToDisplay, setRecipesToDisplay] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/recipes')
    .then(r => r.json())
    .then(recipeData => setRecipesToDisplay(recipeData));
  }, [])


  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/recipes'>
          <RecipesList recipesToDisplay={recipesToDisplay} />
        </Route>
        <Route exact path='/recipes/:recipeId'>
          <RecipeDetail />
        </Route>
        <Route exact path='/new'>
          <AddRecipe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
