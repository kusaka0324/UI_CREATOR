import React  from 'react';
import styled from 'styled-components';

import logo from '@/assets/logo.svg'

export const Topber = () => {
  return (
    <HeaderStyle>
      <HeaderTitle>
        <img src={logo}/>
      </HeaderTitle>
    </HeaderStyle>
  )
}


const HeaderStyle =styled.header`
  grid-row   : 1;
  grid-column: 1 / span 2;
  position   : relative;
  height     : 100px;
  background : #fefefe;
  box-shadow : 10px 0px 10px rgba(0, 0, 0, 0.25);
`;

const HeaderTitle = styled.div`
  position   : absolute;
  top        : 50%;  
  transform  : translateY(-50%);
  left       : 2.75rem;
  line-height: 100px;
  > img {
    height: 100px;
    display: flex;
    align-items: center;
  }
`;