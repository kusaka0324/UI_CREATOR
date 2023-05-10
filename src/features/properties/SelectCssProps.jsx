import React  from 'react';
import styled from 'styled-components';

export const SelectCssProps= () => {
  return (
    <SelectAreaLayout>
      <SelectAreaTitle>CSS Properties</SelectAreaTitle>
      
      <SelectAreaWrapper>

      </SelectAreaWrapper>
    </SelectAreaLayout>
  );
};

const SelectAreaLayout= styled.section`
  position: absolute;
  bottom: 0;
  height: 50%;
  width : 100%;
  background: #1c1c1c;
`;

const SelectAreaTitle= styled.div`
  color: #878787;
  font-size: 1.25rem;
  font-weight: 600;
`;

const SelectAreaWrapper= styled.div`

`;
