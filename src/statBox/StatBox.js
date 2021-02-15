import React from 'react'
import styles from './StatBox.module.css'

export default function StatBox({ speedTyping }) {
  return (
    <div className={styles.containerStatbox}>
      <div className={styles.containerSpeed}>
        <div className={styles.speedTitles}>
          <div className={styles.speedIcon}></div>
          <p>Скорость</p>
        </div>

        <div className={styles.speedValues}>
          <h2>{speedTyping}</h2>
          <p>Симв./мин</p>
        </div>
      </div>

      <div className={styles.containerAgain}>
        <div className={styles.againIcon}></div>
        <p className={styles.againText}>Заново</p>
      </div>
    </div>
  )
}
