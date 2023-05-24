import React          from 'react';
import styled         from 'styled-components';
import CodeIcon       from '@mui/icons-material/Code';
import GridViewIcon   from '@mui/icons-material/GridView';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { ScreenLayout }       from '@/features/screen';
import { Topber, IconButton } from '@/components/ui';
import { CodeEditor }         from '@/features/codeEditor';
import { SelectControllers }  from '@/features/controller';
// import { Preview }            from '@/features/preview';

export default function App() {
  const [ activeContent, setActiveContent ] = React.useState('displayButtons');

  function handleButtonClick(contentId) {
    setActiveContent(contentId);
  }
  return (
    <MainLayout >
      <Topber />

      <PreviewLayout >
        <PreviewContainer>
          <ScreenLayout></ScreenLayout>
        </PreviewContainer>
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
        
          { activeContent === 'codeEditor' && (<CodeEditor />) }
          { activeContent === 'displayButtons' && (<SelectControllers/>) }          
      </ContentLayout>        
      {/* { activeContent === 'setCustom' && (<Preview />) } */}
    </MainLayout>
  )
}

const MainLayout= styled.div`
  display    : grid;
  margin     : 0;
  min-height : 100vh;
  min-width  : 100vw;
  grid-template-rows   : 5.75rem 1fr;
  grid-template-columns: 1fr 1fr;
`;

const PreviewLayout= styled.div`
  grid-row   : 2;
  grid-column: 2;
  background : #fefefe;
`;

const PreviewContainer= styled.div`
  height     : 100%;
  width      : 100%;
  display    : flex;
  align-items: center;
  justify-content:center;
`;

const ContentLayout= styled.main`
  display    : flex;
  grid-row   : 2;
  grid-column: 1;
  width      : 100%;
  height     : 100%;
  background : #ECECEC;
  padding    : 1rem;
`;

const Navigation= styled.ul`
  margin-left  : 1rem;
  padding-top  : 2.15rem;
  width        : 100px;
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

