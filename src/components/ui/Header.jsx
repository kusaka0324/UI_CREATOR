import React  from 'react';
import styles from './header.module.css';

export const Header = ({ title, accentTitle }) => {
  return (
    <header className='relative h-80 w-full bg-'>
      <div className=''>
        {title}
        <span className={styles[`title-accent`]} >
          {accentTitle}
        </span> 
      </div>
    </header>
  )
}
