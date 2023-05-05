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
  height         : 60px;
  width          : 180px;
  background     : #7E7E7E;
  border-radius  : 20px;
`;

const ItemFontStyle= styled.div`
  color    : #fefefe;
  font-size: 20px;
`;

const InputField= styled.input`
  height    : 28px;
  width     : 36px;
  text-align: center;
  border    : none;
  outline   : none;
  background: #D9D9D9;
  border-radius: 5px;
`; 

