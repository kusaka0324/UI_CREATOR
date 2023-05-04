import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { menuItemList } from './menuItemList';

export const TabMenu = () => {
  
  return (
    <Tabs>
      <TabList>
        {menuItemList.map(({id, tabName}) => (
          <Tab key={id}>
            {tabName}
          </Tab>
        ))}
      </TabList>

      <TabPanel>
        <p>test1</p>
      </TabPanel>
      <TabPanel>
        <p>test2</p>
      </TabPanel>
    </Tabs>
  );
}
