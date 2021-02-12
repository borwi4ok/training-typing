import styles from './App.module.css'
import React, { useState } from 'react'
import MainText from './mainText/MainText'
import StatBox from './statBox/StatBox'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <MainText></MainText>
        <StatBox></StatBox>
      </div>
    </div>
  )
}

export default App
