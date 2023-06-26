import React  from 'react'
import styled, { css } from 'styled-components';

export const Screen = ({ buttonsStyle, mode, children}) => {
  return (
    <ScreenStyle mode={mode} >
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
  ${(props)=> 
    props.mode === 'preview' 
    ? css`
        padding: 15px 30px 15px 30px;
        height : 50vh;
        width  : 100vh;       
      `
    : css`
        padding: 10px 20px 10px 20px;
        height : 30vh;
        width  : 60vh;       
    `
    };
`;

const ScreenContent = styled.div`
  position     : relative;
  top          : 50%;
  left         : 50%;
  background   : #f0efef;
  border-radius: 30px;
  transform    : translate(-50%, -50%);
  height       : 100%;
  width        : 100%;
`;