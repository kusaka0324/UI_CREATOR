import React  from 'react';     
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import { EditHtml, EditCss } from './editcode';

export const EditorLayout = (props) => {
  const { children } = props;

  return (
    <EditLayoutStyle>
      <Tabs>
      <EditorHead >
        
          <TabList>
            <Tab>{'HTML'}</Tab>
            <Tab>{'CSS' }</Tab>
          </TabList>
        
      </EditorHead>
      <EditArea> 
        <TabPanel>
            <EditHtml/>
          </TabPanel>
          <TabPanel>
            <EditCss/>
          </TabPanel>
        
      </EditArea>
      </Tabs>
    </EditLayoutStyle>
  );
};

const EditLayoutStyle= styled.div`
    margin-left: 1.25rem;
    height     : calc(100vh - 8rem);
    width      : calc(100vh - 8rem);
    background : #1c1c1c;
    overflow   : auto;
`;

const EditorHead= styled.div`
  
`; 

const EditArea= styled.div`
  padding      : 0.125rem 0 1.25rem 0;
  height       : 100%;
  width        : 100%;
  background   : #0D0E10;
`;

