import React  from 'react';
import styles from './editorFrame.module.css';
import { TabMenu } from '../../../components/ui';

export const EditorFrame = (props) => {
  const { children } = props;

  return (
    <div className={styles[`editor-frame`]} >
      <div className={styles[`tab-menu`]} >
        
      </div>
      <div className={styles[`edit-area`]} >
        {children}  
      </div>
    </div>
  )
}

