import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ConfirmModal.module.css';

function ConfirmModal({ confirmAction, changeModalVisibility }) {

  const params = useParams();

  const confirmMessage = confirmAction === 'deleteConfirm' ?
    'Are you sure you want to delete this recipe?' :
    'Some other message?';

  function handleCancelClick() {
    changeModalVisibility();
  }

  function handleConfirmDeleteClick() {
    fetch(`http://localhost:4000/recipes/${params.recipeId}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then(confirmedDelete => console.log('deleted!'))
  }

  return (
    <div className={styles['confirm-modal']}>
      <h3>{confirmMessage}</h3>

      {
        confirmAction === 'deleteConfirm' ?
          <div>
            <button onClick={handleConfirmDeleteClick}>Confirm</button>
            <button onClick={handleCancelClick}>Cancel</button>
          </div> :
          <div>
            <button>OK</button>
          </div>
      }
    </div>
  )
}

export default ConfirmModal;