import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const TabMenu = () => {
  return (
    <Tabs>
      <TabList>

          <Tab>
            {'HTML'}
          </Tab>
          <Tab>
            {'CSS'}
          </Tab>
        
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
