//components/Popup.js
import React from 'react';
import styles from './popup.module.css'

export default function Popup({ onUpdateValue }) {

    const handleValueChange = (event) => {
      onUpdateValue(event.target.value);
    };
    return (
        <div className={styles.container}>
          <h2 className={styles.title}>Popup (Child)</h2>
          <p className={styles.title2}>Type to change parent label</p>
          <input 
          className={styles.input}
            type="text" 
            placeholder="Type here"
            onChange={handleValueChange} 
          />
        </div>
      );
    }