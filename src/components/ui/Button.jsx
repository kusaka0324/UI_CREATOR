import React  from 'react';
import styles from './button.module.css';

export const Button = (
  {
    primary,
    secondary,
    variant,
    startIcon,
    endIcon,
    ...props
  }
) => {
  return (
    <button 
      className={styles}
      {...props}
    >
      <span>{startIcon}</span>
      {props.children}
      
    </button>
  )
}

