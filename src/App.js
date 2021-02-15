import styles from './App.module.css'
import React, { useState } from 'react'
import MainText from './mainText/MainText'
import StatBox from './statBox/StatBox'
import $ from 'jquery'

function App() {
  //speedTyping - how many right letters was inputed per minute
  const [speedTyping, setSpeedTyping] = useState(0)

  //counter like pivot which moves with typing
  //rightAns var for right inputed letters
  let lettersInSpan = [],
    counter = 0,
    rightAns = 0,
    startTime

  //handle each keypress
  window.addEventListener(
    'keydown',
    (event) => {
      const keyName = event.key

      lettersInSpan = $('#mainText').children()

      let curLetter = lettersInSpan[counter],
        nextLetter = lettersInSpan[counter + 1]

      if (keyName == curLetter.innerHTML) {
        if (counter == 0) startTime = new Date()

        rightAns++

        $(curLetter).removeClass('wrong')

        $(curLetter).removeClass('current')

        $(curLetter).addClass('passed')

        $(nextLetter).addClass('current')

        counter++

        let timeDifference = new Date().getTime() - startTime.getTime()

        setSpeedTyping(Math.ceil((rightAns / (timeDifference / 1000)) * 60))
      } else {
        $(curLetter).addClass('wrong')
      }
    },
    false
  )

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <MainText></MainText>
        <StatBox speedTyping={speedTyping}></StatBox>
      </div>
    </div>
  )
}

export default App
