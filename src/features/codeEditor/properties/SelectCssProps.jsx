import React  from 'react';
import styled from 'styled-components';

import { propsList } from './propsList';
import { DraggableLayer } from '@/components/options';
import { PropItem } from './PropItem';

export const SelectCssProps= () => {
  return (
    <SelectAreaLayout>
      <SelectAreaTitle>CSS Properties</SelectAreaTitle>
      
      <SelectAreaWrapper>
        <ul>
          {propsList.map(({id, propName, unit}) => (
            <DraggableLayer key={id}>
              <li>
                <PropItem 
                  propName={propName} 
                  unit={unit}
                />
              </li>              
            </DraggableLayer>
          ))}          
        </ul>
      </SelectAreaWrapper>
    </SelectAreaLayout>
  );
};

const SelectAreaLayout= styled.section`
  position  : absolute;
  bottom    : 0;
  height    : 50%;
  width     : 100%;
  background: #1c1c1c;
`;

const SelectAreaTitle= styled.div`
  color      : #878787;
  font-size  : 1.25rem;
  font-weight: 600;
`;

const SelectAreaWrapper= styled.div`
  display : grid;
  padding : 1rem 2rem 2rem 1rem;
  width   : 100%;
  height  : 100%;
  opacity : 0.7;
  background : black;
`;