import React  from 'react';
import styled from 'styled-components';

export const PropItem = ({propName, unit}) => {
  return (
    <ItemWrapper>
      <PropStyle>
        {propName}
      </PropStyle>
      <span>:</span>
      {unit == 'px' }
      <InputField />
    </ItemWrapper>
  )
}

const ItemWrapper= styled.div`
  display      : flex;
  align-items  : center;
  padding-left : 1.75rem;
  width        : 17.5rem;
  height       : 3.25rem;
  background   : #e6e6e6;
  border-radius: 20px;


  > span {
    padding-left: 10px;
    font-size   : 15px;
    color       : #6129FF;
  }
`;

const PropStyle= styled.div`
  font-size  : 1.25rem;
  font-weight: bold;
  color      : #6129FF;
`;

const InputField= styled.input`
  
  margin-left  : 10px;
  padding-left : 5px;
  width        : 3.35rem;
  height       : 2rem;
  border       : 0;
  outline      : 0;
  border-radius: 10px;
  font-weight  : 800;

  &:focus {
    padding-left: 2px;
    border: 3px solid #6129FF;
  }
`;