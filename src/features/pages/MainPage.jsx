import React from 'react';
import { MainLayout, ContentLayout } from '@/components/layouts';
import { ScreenLayout }  from '@/features/screen';
import { CodeEditor }  from '@/features/codeEditor';
import { PreviewLayout } from '@/components/layouts/PreviewLayout';
import { IconButton, Topber } from '@/components/ui';
import styled from 'styled-components';
import CodeIcon     from '@mui/icons-material/Code';
import GridViewIcon from '@mui/icons-material/GridView';
import SettingsIcon from '@mui/icons-material/Settings';
import { SelectControllers } from '../controllers/SelectControllers';
import { SelectCssProps } from '../properties';

export const MainPage = () => {
  const [activeContent, setActiveContent] = React.useState('codeEditor');

  function handleButtonClick(contentId) {
    setActiveContent(contentId);
  }
  return (
    <MainLayout >
      <Topber title={'UI'} accentTitle={'CREATER'} />
      <PreviewLayout >
        <ScreenLayout ></ScreenLayout>        
      </PreviewLayout>
      <ContentLayout >
        <Navigation >
          <NavList >
            <IconButton 
              icon   = { <CodeIcon/> }
              onClick= { () => handleButtonClick('codeEditor') } 
              active = { activeContent==='codeEditor' } 
            />
            <IconButton 
              icon   = { <GridViewIcon/> }
              onClick= { () => handleButtonClick('displayButtons') }
              active = { activeContent==='displayButtons' } 
            />
            <IconButton 
              icon   = { <SettingsIcon/> }
              onClick= { () => handleButtonClick('setCustom') } 
              active = { activeContent==='setCustom' }
            />
          </NavList>
        </Navigation>
      { activeContent === 'codeEditor' && (
        <>
          <CodeEditor />
          {/* <SelectCssProps />         */}
        </>

        )
      }
      { activeContent === 'displayButtons' && (
        <div style={{flexDirection:'column'}}>
          <SelectControllers/>
        </div>
        )
      }
      </ContentLayout>        
    </MainLayout>
  )
}

const Navigation= styled.ul`
  width        : 3.75rem;
  height       : 100%;
  background   : #2B2B2B;
  opacity      : 0.8;
  list-style : none;
`;

const NavList= styled.li`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  height         : 100%;
  width          : 100%;
  color          :#FFFDFD;
  text-decoration: none;
`;
