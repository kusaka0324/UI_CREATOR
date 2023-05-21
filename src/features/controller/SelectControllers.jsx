import React  from 'react';
import styled from 'styled-components';
import { DraggableLayer } from '@/components/options/dnds';

export const SelectControllers = () => {
  return (
    <SelectAreaLayout>
      <SelectAreaHeader>
        Left
      </SelectAreaHeader>

      <SelectAreaContent>
        
      </SelectAreaContent>
    </SelectAreaLayout>
  )
}

const SelectAreaLayout= styled.div`
  height: 100%;
  width : 100%;
`;

const SelectAreaHeader= styled.div`
  font-size: 2rem;
`;

const SelectAreaContent= styled.div`
`;