import React  from 'react';
import styles from './iconButton.module.css';
import { NavLink } from 'react-router-dom';

export const IconButton = (props) => {
  const { Icon, path } = props;

  return (
    <NavLink 
      to={path} 
      className={`list-style`}
    >
      <div className={styles[`icon-button`]}>
        <Icon className={styles[`icon-style`]}/>  
      </div>
    </NavLink>
  )
}
