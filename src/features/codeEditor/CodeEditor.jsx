import React, { useState } from 'react';     
import styled,{ css }      from 'styled-components';

import { EditHtml, EditCss } from './edit-code';
import { Header }            from '@/components/ui';

export const CodeEditor = () => {
  const [ activeTab, setActiveTab ]= useState('css');

  const handleClick= (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <EditorLayout>
      <Header title={'Code'} subTitle={'操作ボタンをスタイリングしてみよう'} />

      <EditorWrapper>
        <Tabs>
          <EditorHead>
            <TabList>
              <Tab onClick={() => handleClick('html')} active={activeTab==='html'} >{ 'HTML' }</Tab>
              <Tab onClick={() => handleClick('css')}  active={activeTab==='css'}  >{ 'CSS'  }</Tab>
            </TabList>
            <OptionDiv>
            </OptionDiv>
          </EditorHead>
          <EditArea> 
            <TabPanel>
              { activeTab === 'html' && <EditHtml /> }
              { activeTab === 'css'  && <EditCss /> }                
            </TabPanel>  
          </EditArea>
        </Tabs>
      </EditorWrapper>
    </EditorLayout>
  );
};

const EditorLayout= styled.div`
  margin-left  : 0.75rem;
  height       : 100%;
  width        : calc(100vh - 8rem);
`;

const EditorWrapper= styled.section`
  position     : relative;
  height       : calc(100% - 5.5rem);
  width        : 100%;
  background   : #1c1c1c;
  border-radius: 20px;
`;

const EditorHead= styled.div`
  position: relative;
  width   : 100%;
  height  : 3.25rem;
  z-index : 9999;
`; 

const OptionDiv= styled.div`
  position  : absolute;
  display   : flex;
  column-gap: 5px;
  top       : 50%;
  right     : 10px;
  transform : translateY(-50%);
  z-index   : 999;
`;

const EditArea= styled.div`
  height    : calc(100vh - 20rem);
  width     : 100%;
  background: #1c1c1c;
  overflow  : auto;
`;

const Tabs= styled.div`
  width : 100%;
`;

const TabList= styled.ul`
  position     : relative;
  list-style   : none;
  display      : flex;
  align-items  : center;
  height       : 3.25rem;
  width        : 100%;
  background   : #1c1c1c;
  border-radius: 20px;
`;

const Tab= styled.li`
  display        : flex;
  align-items    : center;
  justify-content: center;
  line-height    : 3rem;
  width          : 7rem;
  color          : #6129FF;
  font-size      : 1.25rem;
  font-weight    : 600;    
  border-radius  : 10px 10px 0 0;
  text-decoration: none;
  ${(props)=> 
    props.active &&
    css`
      height       : 100%;
      font-size    : 1.25rem;
      color        : #FFFFFF;
      background   : #6129FF;
      border-bottom: none;
      transition   : 0.3s;
    `
  }
`;

const TabPanel= styled.div`

`;
