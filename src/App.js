import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import RecipesList from './RecipesList';
import RecipeDetail from './RecipeDetail';
import AddRecipe from './AddRecipe';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/recipes'>
          <RecipesList />
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
