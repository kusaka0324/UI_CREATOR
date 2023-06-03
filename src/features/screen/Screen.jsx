import React  from 'react'
import styled from 'styled-components';

export const Screen = ({ buttonsStyle, children}) => {
  return (
    <ScreenStyle >
        <ScreenContent >
          { children }
        </ScreenContent>        
    </ScreenStyle>
  );
};

const ScreenStyle = styled.div`
  margin       : 1.25rem;
  position     : relative;
  background   : #4C4B4B;
  border-radius: 30px;
  height       : 21rem;
  width        : 42rem;
`;

const ScreenContent = styled.div`
  position     : absolute;
  top          : 50%;
  left         : 50%;
  background   : #f0efef;
  border-radius: 30px;
  transform    : translate(-50%, -50%);
  height       : 19rem;
  width        : 38rem;
  
`;