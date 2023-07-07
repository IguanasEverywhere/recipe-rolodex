import React, { useState, useEffect } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import styles from './AddRecipe.module.css'

function AddRecipe({ onNewRecipe, modalVisible, changeModalVisibility }) {

  const [newRecipeFormData, setNewRecipeFormData] = useState({
    name: '',
    image: '',
    url: '',
    notes: ''
  })

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (newRecipeFormData.name.length > 0 &&
      newRecipeFormData.image.length > 0 &&
      newRecipeFormData.url.length > 0 &&
      newRecipeFormData.notes.length > 0) {
        setFormIsValid(true)
      } else {
        setFormIsValid(false)
      }
  }, [newRecipeFormData])

  function handleAddFormChange(e) {
    setNewRecipeFormData({
      ...newRecipeFormData,
      [e.target.name]: e.target.value
    })
  }

  function handleAddFormSubmit(e) {
    changeModalVisibility();
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
      .then(addedRecipe => {
        onNewRecipe(addedRecipe);
      })
  }

  return (
    <div className={styles['form-container']}>
      <h2>Enter Recipe Info:</h2>
      <br></br>
      <div className={styles['form-area']}>
        <form onSubmit={handleAddFormSubmit}>
          <label htmlFor="name">Name of Recipe</label>
          <br></br>
          <input name="name" value={newRecipeFormData.name} onChange={handleAddFormChange} id="name"></input>
          <br></br>

          <label htmlFor="image">URL of Recipe Image</label>
          <br></br>
          <input name="image" value={newRecipeFormData.image} onChange={handleAddFormChange} id="image"></input>
          <br></br>

          <label htmlFor="url">Recipe Link</label>
          <br></br>
          <input name="url" value={newRecipeFormData.url} onChange={handleAddFormChange} id="url"></input>
          <br></br>

          <label htmlFor="notes">Notes About Recipe</label>
          <br></br>
          <input name="notes" value={newRecipeFormData.notes} onChange={handleAddFormChange} id="notes"></input>
          <br></br>

          {formIsValid ? <input className={styles['submit-btn']} type="submit"></input> : <p className={styles['invalid-form-msg']}>Please enter values for every field</p>}
        </form>
      </div>
      {modalVisible ? <Backdrop /> : null}
      {modalVisible ? <ConfirmModal confirmAction='addConfirm' changeModalVisibility={changeModalVisibility} /> : null}
    </div>
  )
}

export default AddRecipe;