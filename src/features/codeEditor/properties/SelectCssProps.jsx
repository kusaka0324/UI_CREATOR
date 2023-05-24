import React  from 'react';
import styled from 'styled-components';

import { propsList } from './propsList';
import { DraggableLayer } from '@/components/options';
import { PropItem } from './PropItem';

export const SelectCssProps= () => {
  return (
    <SelectAreaLayout>
      <SelectAreaTitle>
        
        CSS Properties
      </SelectAreaTitle>
      
      <SelectAreaWrapper>
        <PropItemList>
          {propsList.map(({id, propName, explanation, unit}) => (
            <li key={id} >
              <ExpStyle>{explanation}</ExpStyle>
              <DraggableLayer >
                <PropItem 
                  propName={propName} 
                  unit={unit}
                />
              </DraggableLayer>
            </li>              
          ))}          
        </PropItemList>
      </SelectAreaWrapper>
    </SelectAreaLayout>
  );
};

const SelectAreaLayout= styled.section`
  position     : absolute;
  top          : 0;
  right        : 0;
  height       : 100%;
  width        : 50%;
  background   : #1c1c1c;
  border-radius: 0 20px 20px 0;
`;

const SelectAreaTitle= styled.div`
  display    : flex;
  align-items: center;
  color      : #6129FF;
  font-size  : 1.25rem;
  font-weight: 600;
  height     : 50px;
`;

const SelectAreaWrapper= styled.div`
  padding   : 1rem 2rem 2rem 1rem;
  width     : 100%;
  height    : calc(100% - 3.15rem);
  background: #1e1e1e;
  overflow  : auto;
`;

const PropItemList= styled.ul`
  list-style    : none;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  gap: 2.25rem;
`;

const ExpStyle= styled.span`
  color      : #929292;
  font-size  : 0.75rem;
  font-weight: 500;
  
`;