import React  from 'react';
import styled from 'styled-components';

export const Header = ({ title, accentTitle }) => {
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
  position: relative;
  height  : 80px;
  width   : 100%;
  background-color: #fefefe;
  box-shadow: 3px 3px 3px 1.5px rgb(199, 199, 199);
`;

const HeaderTitle = styled.div`
  position : absolute;
  top      : 50%;
  left     : 50px;
  transform: translateY(-50%);
  line-height: 32px;
  font-size  : 32px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  
  > span {
    padding-left: 5px;
    font-size   : 24px;
  }
`;