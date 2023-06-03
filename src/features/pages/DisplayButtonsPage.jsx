import React, { useState } from 'react';
import styled              from 'styled-components';

import { ContentLayout, MainLayout }     from '@/components/Layouts'
import { DraggableBox, DroppableScreen } from '../controller'
import { Header }                        from '@/components/ui';
import { controllerList }                from '@/data';

export const DisplayButtonsPage = () => {
  return (
    <MainLayout>      
      <PreviewLayout >
        <DroppableScreen />
      </PreviewLayout>
      <ContentLayout>
        <SelectAreaLayout>
          <Header title={'Buttons'} subTitle={'操作ボタンを配置しよう'} />
            { controllerList.map(({id, head, contents}) => (
              <OpsSelectArea key={id} >
                <OpsHeader>{head}</OpsHeader>
                <OpsList>
                  {contents.map(({index, id, opsName, Icon, rotate})=>
                    <OpsItem key={index} >
                      <DraggableBox 
                        id     = {id}
                        opsName= {opsName}
                        Icon   = {Icon}
                        rotate = {rotate}
                      />        
                      <span>{opsName}</span>
                    </OpsItem>
                  )}
                </OpsList>
              </OpsSelectArea>
            ))}        
        </SelectAreaLayout>
      </ContentLayout>
    </MainLayout>
  )
}


const PreviewLayout= styled.div`
  height         : 100%;
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: center;
  grid-row       : 2;
  grid-column    : 2;
  background     : #fefefe;
`;

const SelectAreaLayout= styled.div`
  display       : flex;
  flex-direction: column;
  gap           : 0.5rem;
  margin-left   : 1.25rem;
  height        : calc(100vh - 8rem);
  width         : calc(100vh - 8rem);
  
`;

const OpsSelectArea= styled.section`
  height       : 26vh;
  width        : 100%;
  background   : #1e1e1e;
  border-radius: 20px;
`;

const OpsHeader= styled.div`
  margin         : 0.75rem 0 0 0.75rem;
  display        : flex;
  align-items    : center;
  justify-content: center;
  width          : 6.25rem;
  height         : 2.35rem;
  font-size      : 16px;
  font-weight    : bold;
  font-family    : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color          : #fefefe;
  background     : #6129FF;
  border-radius  : 15px;
`;

const OpsList= styled.ul`  
  display        : flex;
  align-items    : center;
  justify-content: center;
  gap            : 15%;
  list-style     : none;
  height         : calc(100% - 3.1rem);
`;

const OpsItem= styled.li`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  margin         : 1.5rem 0 2.5rem 0;
  height         : 100%;
  
  > span {
    margin-top : 1.25rem;
    color      : #C4C4C4;
    font-size  : 1rem;
    font-weight: 600;
  }
`;