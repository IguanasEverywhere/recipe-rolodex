import React from 'react';
import logo from '../../assets/images/cooker-king-AOVtEuU9UGc-unsplash.jpg'
import styles from './Home.module.css'

function Home() {

  return (
    <div className={styles['landing-page']}>
      <h1 className={styles.landingTitle}>Recipe Rolodex</h1>
        <img src={logo} alt='rolodex-img' className={styles.landingImg}></img>
    </div>
  )
}

export default Home;

