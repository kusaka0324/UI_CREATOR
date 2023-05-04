import React  from 'react'
import styles from './screenLayout.module.css';

export const ScreenLayout = ({className, children}) => {
  return (
    <div className={styles[`screen-style--${className}`] } >
      <div className={styles[`content--${className}`]} >
        {children}
      </div>
    </div>
  )
}

