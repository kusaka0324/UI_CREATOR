import React  from 'react';
import styled, { css } from 'styled-components';

export const IconButton = ({icon, ...props}) => {
  return (
    <IconButtonStyle {...props} >
      {icon}
    </IconButtonStyle>
  );
};

const IconButtonStyle= styled.button`
  display        : flex;
  justify-content: center;
  align-items    : center;
  height         : 3rem;
  width          : 100%;
  outline        : 0;
  border-radius  : 15px;
  color          : #707070;
  background     : #1c1c1c;

  ${(props) => 
    props.active && 
    css`
      color     : #ffffff;
      background: #9c9c9d;
      transition: 0.3s;
    `
  }
`;

