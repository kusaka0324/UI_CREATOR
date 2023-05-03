import React  from 'react';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header>
      <div className={styles[`system-title`]} >
        UI
        <span className={styles[`title-accent`]} >
          CREATER
        </span> 
      </div>
    </header>
  )
}
