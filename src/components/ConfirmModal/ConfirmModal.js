import React from 'react';
import styles from './ConfirmModal.module.css';

function ConfirmModal({ confirmAction }) {

  const confirmMessage = confirmAction === 'deleteConfirm' ?
    'Are you sure you want to delete this recipe?' :
    'Some other message?';

  return (
    <div className={styles['confirm-modal']}>
      <h3>{confirmMessage}</h3>

      {
        confirmAction === 'deleteConfirm' ?
          <div>
            <button>Confirm</button>
            <button>Cancel</button>
          </div> :
          <div>
            <button>OK</button>
          </div>
      }
    </div>
  )
}

export default ConfirmModal;