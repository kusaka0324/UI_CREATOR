import React  from 'react';
import styled, { css } from 'styled-components';

export const IconButton = ({icon, title, ...props}) => {
  return (
    <IconButtonStyle>
      <ButtonStyle {...props} >
        {icon}
      </ButtonStyle>      
      <IconTitle>
          {title}
        </IconTitle>      
    </IconButtonStyle>
  );
};

const IconButtonStyle= styled.div`
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
`;

const ButtonStyle= styled.button`
  height       : 3rem;
  width        : 3rem;
  outline      : 0;
  border       : 0;
  border-radius: 15px;
  color        : #6129FF;
  background   : #FEFEFE;

  ${(props) => 
    props.active && 
    css`
      color     : #FEFEFE;
      background: #6129FF;
      transition: 0.3s;
    `
  }
`;

const IconTitle= styled.span`
  margin     : 1rem 0 0.65rem 0;
  color      : #747474;
  font-size  : 0.825rem; 
  font-weight: bold;
`;
