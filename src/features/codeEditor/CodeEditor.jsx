import React          from 'react';     
import styled,{ css } from 'styled-components';
import StyleIcon      from '@mui/icons-material/Style';
import ClearIcon      from '@mui/icons-material/Clear';

import { EditHtml, EditCss } from './Editcode';
import { SelectCssProps }    from './properties';
import { Header }            from '@/components/ui';

export const CodeEditor = () => {
  const [ activeTab, setActiveTab ]      = React.useState('css');
  const [ isDrawerOpen, setIsDrawerOpen ]= React.useState(false);

  const handleClick= (tabName) => {
    setActiveTab(tabName);
  };

  const handleIsOpen= () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

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
            <DrawerIconButton onClick={handleIsOpen} >
              { isDrawerOpen === false
                ? <OpenIcon/>
                : <CloseIcon/>
              }
            </DrawerIconButton>
          </EditorHead>
          <EditArea> 
            <TabPanel>
              { activeTab === 'html' && <EditHtml /> }
              { activeTab === 'css'  && <EditCss /> }                
            </TabPanel>            
            {isDrawerOpen=== true && <SelectCssProps/> }
          </EditArea>
        </Tabs>
      </EditorWrapper>
    </EditorLayout>
  );
};

const EditorLayout= styled.div`
  margin-left  : 1.25rem;
  height       : 100%;
  width        : calc(100vh - 8rem);
`;

const EditorWrapper= styled.section`
  position     : relative;
  height       : calc(100% - 5.25rem);
  width        : 100%;
  background   : #1c1c1c;
  border-radius: 20px;
`;
const EditorHead= styled.div`
  position: relative;
  width   : 100%;
  height  : 3rem;
`; 

const EditArea= styled.div`
  padding   : 0.5rem 0.5rem 0 0.5rem;
  height    : 100%;
  width     : 100%;
  background: #1c1c1c;
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

const DrawerIconButton= styled.button`  
  position       : absolute;
  display        : flex;
  align-items    : center;
  justify-content: center;
  top            : 50%;
  right          : 10px;
  border         : 0;   
  width          : 3rem;
  height         : 3rem;
  background     : #1E1E1E;
  border-radius  : 10px;
  transform      : translateY(-50%);
  z-index        : 99999;

  &:hover {
    background: #343434;
  }
`;

const OpenIcon= styled(StyleIcon)`
  color: #c2c2c2;
`;

const CloseIcon= styled(ClearIcon)`
  color: #959595;
`;