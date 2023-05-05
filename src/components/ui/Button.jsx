import React  from 'react';
import styled from 'styled-components';

export const Button = ({ icon, children, ...props }) => {
  return (
    <ButtonStyle {...props} >
        <IconStyle>
          { icon }
        </IconStyle>
        { children }        
    </ButtonStyle>
  )
}

const IconStyle= styled.svg`
  margin: 10px;  
  width : 40px;
  height: 40px;
  color : #2962FF;
`;

const ButtonStyle= styled.button`
  display        : flex;
  justify-content: center;
  align-items    : center;
  height         : 100px;
  width          : 300px;
  color          : #2962FF;
  font-size      : 32px;
  font-weight    : 600;
  font-family    : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background     : #EEF8FF;
  border         : 5px solid #2962FF;
  border-radius  : 20px;
`;


