import React  from 'react';     
import styled, { css } from 'styled-components';
import { EditHtml, EditCss } from './editCode';
import { SelectCssProps } from './properties';
import { Header } from '@/components/ui';

export const CodeEditor = () => {
  const [activeTab, setActiveTab] = React.useState('html');

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <EditorLayout>
      <Header title={'Code'} subTitle={'操作ボタンをスタイリングしてみよう'} />
      
      <Tabs>
      <EditorHead >
        <TabList>
          <Tab onClick={() => handleClick('html')} active={activeTab==='html'} >{'HTML'}</Tab>
          <Tab onClick={() => handleClick('css')} active={activeTab==='css'}>{'CSS' }</Tab>
        </TabList>
      </EditorHead>
      <EditArea> 
        <TabPanel >
          {activeTab === 'html' && <EditHtml/>}
          {activeTab === 'css' && <EditCss/>}
        </TabPanel>
      </EditArea>
      </Tabs>
      <SelectCssProps/>
    </EditorLayout>
  );
};

const EditorLayout= styled.div`
    position     : relative;
    margin-left  : 1.25rem;
    height       : calc(100vh - 8rem);
    width        : calc(100vh - 8rem);
`;

const EditorHead= styled.div`
  
`; 

const EditArea= styled.div`
  padding      : 0.5rem 0.5rem 0 0.5rem;
  height       : 100%;
  width        : 100%;
  background   : #1c1c1c;
`;

const Tabs= styled.div`
  width : 100%;
`;

const TabList= styled.ul`
  list-style   : none;
  display      : flex;
  align-items  : center;
  height       : 3.25rem;
  width        : 100%;
  background   : #1c1c1c;
`;

const Tab= styled.li`
  display        : flex;
  align-items    : center;
  justify-content: center;
  line-height : 3rem;
  width      : 7rem;

  color      : #6129FF;
  font-size  : 1.25rem;
  font-weight: 600;    
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  border-radius: 10px 10px 0 0;
  text-decoration: none;
  ${(props)=> 
    props.active &&
    css`
      height       : 100%;
      font-size    : 1.25rem;
      color        :#FFFFFF;
      background   :#6129FF;
      border-bottom: none;
      transition: 0.3s;
    `
  }
`;

const TabPanel= styled.div`

`;