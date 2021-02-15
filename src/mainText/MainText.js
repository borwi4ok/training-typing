import React from 'react'
import $ from 'jquery'
import styles from './MainText.module.css'
import './textStyles.css'

export default function MainText() {
  let text = []

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
  //in the start first letter should be current
  window.onload = function () {
    $('#mainText > span:nth-child(1)').addClass('current')
  }

  getBaconText()

  return <div className={styles.container} id='mainText'></div>
}
