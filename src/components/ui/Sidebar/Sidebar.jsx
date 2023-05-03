import React  from 'react';
import styles from './sidebar.module.css';

import { menuList } from './menuList';
import { IconButton } from '../IconButton';

export const Sidebar = () => {
  return (
    <nav className={styles.sidebar} >
      <ul>
        {menuList.map((
          {
            id,
            itemName,
            icon,
            routePath
          }
        ) => (
          <li key={id}>
            <IconButton 
              Icon={icon}
              path={routePath}  
            />
            <span>{itemName}</span>            
          </li>
        ))}
      </ul>
    </nav>
  );
}

