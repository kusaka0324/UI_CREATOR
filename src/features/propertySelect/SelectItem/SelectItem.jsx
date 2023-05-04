import React  from 'react';
import styles from './selectItem.module.css';

export const SelectItem = ({ property, }) => {
  return (
    <div className={styles[`property-box`]}>
      <div className={styles[`property-font-style`]}>
        {property}：
        <input 
          type= 'number'
          min = {0}
          className={styles[`input-area`]} 
        />
        <span>px</span>
      </div>
    </div>
  )
}


