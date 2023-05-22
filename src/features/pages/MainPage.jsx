import React from 'react';
import { MainLayout, ContentLayout } from '@/components/layouts';
import { ScreenLayout }  from '@/features/screen';
import { CodeEditor }  from '@/features/codeEditor';
import { PreviewLayout } from '@/components/layouts/PreviewLayout';
import { Topber, IconButton } from '@/components/ui';
import { SelectControllers } from '../controller/SelectControllers';

import styled         from 'styled-components';
import CodeIcon       from '@mui/icons-material/Code';
import GridViewIcon   from '@mui/icons-material/GridView';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

export const MainPage = () => {
  const [activeContent, setActiveContent] = React.useState('displayButtons');

  function handleButtonClick(contentId) {
    setActiveContent(contentId);
  }
  return (
    <MainLayout >
      <Topber />
      <PreviewLayout >
        <ScreenLayout ></ScreenLayout>        
      </PreviewLayout>
      <ContentLayout >
        <Navigation >
          <NavList >
            <IconButton 
              icon   = { <GridViewIcon/> }
              title  = { 'buttons' }
              onClick= { () => handleButtonClick('displayButtons') }
              active = { activeContent==='displayButtons' } 
            />
            <IconButton 
              icon   = { <CodeIcon/> }
              title  = { 'code' }
              onClick= { () => handleButtonClick('codeEditor') } 
              active = { activeContent==='codeEditor' } 
            />
            <IconButton 
              icon   = { <SmartphoneIcon/> }
              title  = { 'preview' }
              onClick= { () => handleButtonClick('setCustom') } 
              active = { activeContent==='setCustom' }
            />
          </NavList>
        </Navigation>
        { activeContent === 'codeEditor' && (<CodeEditor />)}
        { activeContent === 'displayButtons' && (<SelectControllers/>)}
      </ContentLayout>        
    </MainLayout>
  )
}

const Navigation= styled.ul`
  margin-left  : 1rem;
  padding-top  : 2.15rem;
  width        : 5.75rem;
  height       : 100%;
  background   : #FEFEFE;
  opacity      : 0.8;
  list-style   : none;
  border-radius: 20px;
  box-shadow   : 2px 2px 2px 2px #a4a4a4;
`;

const NavList= styled.li`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  height         : 100%;
  width          : 100%;
  color          :#FEFEFE;
  text-decoration: none;
`;