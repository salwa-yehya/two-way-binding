//page.js
"use client"
import React, { useState } from 'react';

import styles from './page.module.css'
import Popup from './components/Pop/Popup';

export default function Home() {
  const [parentValue, setParentValue] = useState('Initial Value');
  const [showPopup, setShowPopup] = useState(false);  // to determine whether the popup should be displayed or not.

  const togglePopup = () => {
    setShowPopup(prevState => !prevState);
  } //to change the value of `showPopup`.
  return (
    <main className={styles.main}>
       <h1>Parent Component</h1>
      <label className={styles.label}>Value from Child: {parentValue}</label>
      <br />
      <button onClick={togglePopup} className={styles.buttons}>
        {showPopup ? 'X' : 'Open Popup'}
      </button>  {/*  will call the `togglePopup` function when clicked. The button's label changes based on the value of `showPopup` */}

      {showPopup && <Popup onUpdateValue={setParentValue} />} {/* `Popup` component will only be rendered and displayed when `showPopup` is `true` */}


    </main>
  )
}
