import React  from 'react';
import styled from 'styled-components';

export const SelectItem = ({ property }) => {
  return (
    <SelectItemBox >
      <ItemFontStyle >
        {property}：
        <InputField type='number' min={0} />
        <span>px</span>
      </ItemFontStyle>
    </SelectItemBox>
  )
}

const SelectItemBox= styled.div`
  display        : flex;
  align-items    : center;
  justify-content: center;
  height         : 3.75rem;
  width          : 11.25rem;
  background     : #7E7E7E;
  border-radius  : 20px;
`;

const ItemFontStyle= styled.div`
  color    : #fefefe;
  font-size: 1.25rem;
`;

const InputField= styled.input`
  height       : 1.75rem;
  width        : 2.25rem;
  text-align   : center;
  border       : none;
  outline      : none;
  background   : #D9D9D9;
  border-radius: 5px;
`; 

