import React  from 'react';
import styled from 'styled-components';

import { DraggableLayer } from '@/components/options/dnd';
import { Header } from '@/components/ui';
import { opsList }  from './opsList';

export const SelectControllers = () => {
  return (
    <SelectAreaLayout>
      <Header title={'Buttons'} subTitle={'操作ボタンを配置しよう'} />

        { opsList.map(({index, id, head, contents}) => (
          <OpsSelectArea key={id} gridItem={index}>
            <OpsHeader>{head}</OpsHeader>
            <OpsList>
              {contents.map(({id, opsName, Icon, rotate})=>
                <OpsItem key={id} >
                  <DraggableLayer>
                    <OpsButton>
                      <Icon style={{ rotate: `${rotate}`}}/>
                    </OpsButton>
                  </DraggableLayer>
                  <span>{opsName}</span>
                </OpsItem>
              )}
            </OpsList>
          </OpsSelectArea>
        ))}        
    </SelectAreaLayout>
  )
}

const SelectAreaLayout= styled.div`
  display       : flex;
  flex-direction: column;
  gap           : 0.5rem;
  margin-left   : 1.25rem;
  height        : calc(100vh - 8rem);
  width         : calc(100vh - 8rem);
  
`;

const OpsSelectArea= styled.section`
  height       : 28.5%;
  width        : 100%;
  background   : #1e1e1e;
  border-radius: 20px;
`;

const OpsHeader= styled.div`
  margin         : 0.75rem 0 0 0.75rem;
  display        : flex;
  align-items    : center;
  justify-content: center;
  width          : 8.25rem;
  height         : 3.35rem;
  font-size      : 1.45rem;
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

const OpsButton= styled.div`  
  display        :flex;
  justify-content: center;
  align-items    : center;
  width          : 60px;
  height         : 80px;
  background     : #d4d4d4;
  font-size      : 50px;
`;