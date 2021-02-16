import styles from './App.module.css'
import './textStyles.css'
import React, { useState, useEffect } from 'react'
import MainText from './mainText/MainText'
import StatBox from './statBox/StatBox'
import $ from 'jquery'

function App() {
  //speedTyping - how many right letters was inputed per minute
  const [speedTyping, setSpeedTyping] = useState(0)

  //counter like pivot which moves with typing
  const [counter, setCounter] = useState(0)

  //time when user firstly inputed right letter
  const [startTime, setStartTime] = useState(new Date())

  //rightAns var for right inputed letters
  const [rightAns, setRightAns] = useState(0)

  const [loader, setLoader] = useState(true)

  let lettersInSpan = []

  // get random text
  function getBaconText() {
    let text = []

    //start state
    setSpeedTyping(0)
    setCounter(0)
    setStartTime(new Date())
    setRightAns(0)

    $.getJSON(
      'https://baconipsum.com/api/?callback=?',
      { type: 'meat-and-filler', 'start-with-lorem': '1', paras: '3' },
      function (baconGoodness) {
        if (baconGoodness && baconGoodness.length > 0) {
          $('#mainText').html('')

          for (let i = 0; i < baconGoodness.length; i++) text.push(baconGoodness[i])

          text = text.join('')

          for (let i = 0; i < text.length; i++)
            $('#mainText').append('<span>' + text[i] + '</span>')
        }
      }
    )
    setLoader(false)
  }

  //handle each keydown
  useEffect(() => {
    function handle(event) {
      const keyName = event.key

      lettersInSpan = $('#mainText').children()

      const curLetter = lettersInSpan[counter],
        nextLetter = lettersInSpan[counter + 1]

      if (keyName == curLetter.innerHTML) {
        if (counter == 0) setStartTime(new Date().getTime())

        setRightAns((prev) => prev + 1)

        $(curLetter).removeClass('wrong')

        $(curLetter).removeClass('current')

        $(curLetter).addClass('passed')

        $(nextLetter).addClass('current')

        setCounter((prev) => prev + 1)

        let timeDifference = new Date().getTime() - startTime

        setSpeedTyping(Math.ceil((rightAns / (timeDifference / 1000)) * 60))
      } else {
        $(curLetter).addClass('wrong')
      }
    }
    window.addEventListener('keydown', handle)
    return () => {
      window.removeEventListener('keydown', handle)
    }
  })

  window.onload = getBaconText

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <MainText loader={loader}></MainText>
        <StatBox speedTyping={speedTyping} loadNewText={getBaconText}></StatBox>
      </div>
    </div>
  )
}

export default App
