import React from 'react'
import $ from 'jquery'
import styles from './MainText.module.css'

export default function MainText() {
  let text = [],
    lettersInSpan = [],
    counter = 0

  // get random text
  function getBaconText() {
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
  }

  getBaconText()

  document.addEventListener('keypress', (event) => {
    const keyName = event.key

    lettersInSpan = $('#mainText').children()

    let prevLetter = lettersInSpan[counter - 1],
      curLetter = lettersInSpan[counter],
      nextLetter = lettersInSpan[counter + 1]

    //возможно проблема в модулях
    if (keyName == curLetter.innerHTML) {
      //add green background to current
      $(curLetter).addClass(styles.current)

      //rm green background from previous
      $(prevLetter).removeClass('current')

      //add green color to passed
      $(prevLetter).addClass('passed')

      counter++

      $(prevLetter).removeClass('current')
    } else {
      // $(prevLetter).removeClass(styles.current)
      $(curLetter).addClass(styles.wrong)
    }
  })

  return <div className={styles.container} id='mainText'></div>
}
