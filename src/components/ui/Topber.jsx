import React  from 'react';
import styled from 'styled-components';

export const Topber = ({ title, accentTitle }) => {
  return (
    <HeaderStyle>
      <HeaderTitle>
        {title}
        <span >
          {accentTitle}
        </span> 
      </HeaderTitle>
    </HeaderStyle>
  )
}


const HeaderStyle =styled.header`
  grid-row   : 1;
  grid-column: 1 / span 2;
  position  : relative;
  height    : 5.75rem;
  background: #1c1c1c;
`;

const HeaderTitle = styled.div`
  position   : absolute;
  top        : 50%;
  left       : 4.75rem;
  transform  : translateY(-50%);
  line-height: 3.25rem;
  color: #251be8;
  font-size  : 3.25rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  
  > span {
    color:white;
    padding-left: 0.25rem;
    font-size   : 2rem;
  }
`;