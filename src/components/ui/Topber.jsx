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
  position  : relative;
  height    : 5.75rem;
  width     : 100%;
  background: #fefefe;
  box-shadow: 3px 3px 3px 1.5px rgb(199, 199, 199);
`;

const HeaderTitle = styled.div`
  position   : absolute;
  top        : 50%;
  left       : 4.75rem;
  transform  : translateY(-50%);
  line-height: 3.25rem;
  font-size  : 3.25rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  
  > span {
    padding-left: 0.25rem;
    font-size   : 2rem;
  }
`;