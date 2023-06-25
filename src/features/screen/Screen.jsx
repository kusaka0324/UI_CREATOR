import React  from 'react'
import styled, { css } from 'styled-components';

export const Screen = ({ buttonsStyle, mode, children}) => {
  return (
    <ScreenStyle mode={mode} >
        <ScreenContent mode={mode} >
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
        height : 36rem;
        width  : 67rem;       
      `
    : css`
        height : 21rem;
        width  : 42rem;       
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
  height       : 19rem;
  width        : 38rem;
  ${(props)=> 
    props.mode === 'preview' 
    ? css`
        height : 34rem;
        width  : 60rem;       
      `
    : css`
        height : 19rem;
        width  : 38rem;       
    `
    };
`;