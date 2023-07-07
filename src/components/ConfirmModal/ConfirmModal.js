import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styles from './ConfirmModal.module.css';

function ConfirmModal({ confirmAction, changeModalVisibility, onDeleteRecipe }) {

  const params = useParams();
  const history = useHistory();


  const confirmMessage = confirmAction === 'deleteConfirm' ?
    'Are you sure you want to delete this recipe?' :
    'Recipe Added!';

  function handleCancelClick() {
    changeModalVisibility();
  }

  function handleConfirmDeleteClick() {
    changeModalVisibility();
    fetch(`http://localhost:4000/recipes/${params.recipeId}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(confirmedDelete => {
        onDeleteRecipe(parseInt(params.recipeId))
        history.push('/recipes')
      })
  }

  function handleOKClick() {
    history.push('/recipes');
  }

  return (
    <div className={styles['confirm-modal']}>
      <h3>{confirmMessage}</h3>

      {
        confirmAction === 'deleteConfirm' ?
          <div className={styles['button-area']}>
            <button className={styles['modal-btn']} onClick={handleConfirmDeleteClick}>Confirm</button>
            <button className={styles['modal-btn']} onClick={handleCancelClick}>Cancel</button>
          </div> :
          <div className={styles['button-area']}>
            <button className={styles['modal-btn']} onClick={handleOKClick}>OK</button>
          </div>
      }
    </div>
  )
}

export default ConfirmModal;