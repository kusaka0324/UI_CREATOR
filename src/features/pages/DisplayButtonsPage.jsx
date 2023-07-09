import React  from 'react';
import styled from 'styled-components';

import { ContentLayout, MainLayout } from '@/components/layouts'
import { DraggableBox }              from '../controller'
import { Header }                    from '@/components/ui';
import { controllerList }            from '@/data';
import { Screen }                    from '../screen';
import { ButtonsSelectForm } from '@/components/ui/ButtonsSelectForm';

export const DisplayButtonsPage = () => {
  return (
    <MainLayout>      
      <PreviewLayout >
        <Screen />
      </PreviewLayout>
      <ContentLayout>
        <SelectAreaLayout>
          <Header title={'Buttons'} subTitle={'操作ボタンを配置しよう'} />
          <ButtonsSelectForm />
            {/* { controllerList.map(({id, head, contents}) => (
              <OpsSelectArea key={id} >
                <OpsHeader>{head}</OpsHeader>
                <OpsList>
                  {contents.map(({id, opsName, Icon, rotate})=>
                    <OpsItem key={id} >
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
            ))}         */}
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
  margin-left   : 0.75rem;
  display       : flex;
  flex-direction: column;
  height        : 100%;
  width         : calc(100% - 8rem);
`;

const OpsSelectArea= styled.section`
  position     : relative;
  margin-bottom: 10px;
  height       : 15rem;
  width        : 100%;
  background   : #1e1e1e;
  border-radius: 20px;
  overflow     : auto;
`;

const OpsHeader= styled.div`
  margin         : 0.75rem 0 0 0.75rem;
  position       : absolute;
  display        : flex;
  align-items    : center;
  justify-content: center;
  width          : 85px;
  height         : 38px;
  font-size      : 16px;
  font-weight    : bold;
  font-family    : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color          : #fefefe;
  background     : #6129FF;
  border-radius  : 15px;
`;

const OpsList= styled.ul`  
  display        : flex;
  justify-content: center;
  gap            : 15%;
  height         : 100%;
  width          : 100%;
`;

const OpsItem= styled.li`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  padding-top    : 1.25rem;
  column-gap     : 2.5rem;
  height         : 100%;
  
  > span {
    margin-top : 1.25rem;
    color      : #C4C4C4;
    font-size  : 1rem;
    font-weight: 600;
  }
`;