import React  from 'react';
import styled from 'styled-components';

import { DraggableLayer } from '@/components/options/dnds';
import { Header } from '@/components/ui';
import { opsList }  from './opsList';

export const SelectControllers = () => {
  return (
    <SelectAreaLayout>
      <Header title={'Buttons'} subTitle={'操作ボタンを配置しよう'} />
      { opsList.map(({id, head, contents}) => (
        <OpsSelectArea key={id} >
          <OpsHeader>{head}</OpsHeader>
          
          <OpsList>
            {contents.map(({id, opsName, opsIcon})=>
              <OpsItem key={id} >
                <DraggableLayer>
                  {opsIcon}
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
  width  : 100%;
  height : 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows   : 3.45rem 1fr 1fr 1fr;
`;

const OpsSelectArea= styled.div`
  margin-bottom: 0.5rem;
  background   : #424242;
  border-radius: 20px;
`;

const OpsHeader= styled.div`
  margin         : 0.75rem;
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
  list-style : none;
`;

const OpsItem= styled.li`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  margin         : 1.5rem 0 2.5rem 0;
  height         : 100%;
  width          :100%;
  img {
    height: 3.25rem;
    width : 3.25rem;
    background: #ffffff;

  }
  > span {
    margin-top : 1.25rem;
    color      : #C4C4C4;
    font-size  : 1rem;
    font-weight: 600;
  }
`;