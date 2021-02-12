import React from 'react'
import styles from './MainText.module.css'

export default function MainText() {
  return (
    <div className={styles.container}>
      <p>
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
        является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий
        безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum
        для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять
        веков.
      </p>
    </div>
  )
}
