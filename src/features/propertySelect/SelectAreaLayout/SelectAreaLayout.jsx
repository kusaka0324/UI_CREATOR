import React  from 'react';
import styles from  './selectAreaLayout.module.css';

export const SelectAreaLayout = ({ areaTitle, children }) => {
  return (
    <div className={styles[`select-area`]} >
      <div className={styles[`area-header`]} >
        <div className={styles[`area-title`]} >
          {areaTitle}
        </div>
      </div>
      <div className={styles.content} >
        <div className={styles[`content-wrapper`]} >
          {children}
        </div>        
      </div>
    </div>
  )
}

