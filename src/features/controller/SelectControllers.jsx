import React  from 'react';
import styled from 'styled-components';

import { DraggableLayer } from '@/components/options/dnds';
import { opsList }  from './opsList';

export const SelectControllers = () => {
  return (
    <SelectAreaLayout>
      { opsList.map(({id, head, contents}) => (
        <OpsSelectArea key={id} >
          <OpsHeader>{head}</OpsHeader>
          
          <OpsList>
            {contents.map(({id, opsName, opsIcon})=>
              <OpsItem key={id} >
                <DraggableLayer>
                  <img src={opsIcon} alt={opsName} />
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
  position   : relative;
  display    : grid;
  margin-left: 1.25rem;
  height     : calc(100vh - 8rem);
  width      : calc(100vh - 8rem);
`;

const OpsSelectArea= styled.div`
  margin-bottom: 0.5rem;
  width        : 100%;
  height       : calc(100%-0.5rem);
  background   : #424242;
  border-radius: 20px;
`;

const OpsHeader= styled.div`
  margin         : 0.75rem;
  position       : absolute;
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
  height     : 100%;
  width      : 100%;
  list-style : none;

`;

const OpsItem= styled.li`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  margin: 2.5rem;

  img {

    height: 80px;
    width : 80px;
    background: #ffffff;

  }
  > span {
    color      : #C4C4C4;
    font-size  : 1.25rem;
    font-weight: 600;
  }
`;