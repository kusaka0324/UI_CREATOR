import React  from 'react';
import styles from './header.module.css';

export const Header = ({ title, accentTitle }) => {
  return (
    <header>
      <div className={styles[`system-title`]} >
        {title}
        <span className={styles[`title-accent`]} >
          {accentTitle}
        </span> 
      </div>
    </header>
  )
}
