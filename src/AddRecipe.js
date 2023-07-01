import React, { useState } from 'react';

function AddRecipe() {

  const [newRecipeFormData, setNewRecipeFormData] = useState({
    name: '',
    image: '',
    url: '',
    notes: ''
  })

  console.log('FORM DATA STATE', newRecipeFormData);

  function handleAddFormChange(e) {
    setNewRecipeFormData({
      ...newRecipeFormData,
      [e.target.name]: e.target.value
    })
  }

  function handleAddFormSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:4000/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newRecipeFormData)
    })
    .then(r => r.json())
    .then(addedRecipe => console.log(addedRecipe))
  }

  return (
    <div>
      <form onSubmit={handleAddFormSubmit}>
        <input name="name" placeholder="Recipe Name" value={newRecipeFormData.name} onChange={handleAddFormChange}></input>
        <input name="image" placeholder="Recipe Image URL" value={newRecipeFormData.image} onChange={handleAddFormChange}></input>
        <input name="url" placeholder="Recipe Link URL" value={newRecipeFormData.url} onChange={handleAddFormChange}></input>
        <input name="notes" placeholder="Notes" value={newRecipeFormData.notes} onChange={handleAddFormChange}></input>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default AddRecipe;