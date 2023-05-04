import React  from 'react';
import styles from './editorLayout.module.css';

import { TabMenu } from '../../../components/ui';

export const EditorFrame = (props) => {
  const { children } = props;

  return (
    <div className={styles[`editor-layout`]} >
      <div className={styles[`tab-menu`]} >
        <TabMenu/>
      </div>
      <div className={styles[`edit-area`]} >
        {children}  
      </div>
    </div>
  )
}

