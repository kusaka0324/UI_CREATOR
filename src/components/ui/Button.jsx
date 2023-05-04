import React  from 'react';
import styled from 'styled-components';

export const Button = ({ icon, children, ...props }) => {
  return (
    <ButtonStyle {...props} >
      <div>
        <IconStyle>
          { icon }
        </IconStyle>
        <ElementFontStyle>
          { children }
        </ElementFontStyle>
      </div>
    </ButtonStyle>
  )
}

const ButtonStyle= styled.button`
  position     : relative;
  height       : 100px;
  width        : 300px;
  background   : #EEF8FF;
  border       : 5px solid #2962FF;
  border-radius: 20px;
  &:active {
    color     : #EEF8FF;
    background: #2962FF;
    transition: 0.5s;
  };

  > div {
    position : absolute;
    top      : 50%;
    left     : 50%;
    transform: translate(-50%, -50%);
  }
`;

const IconStyle= styled.span`
  margin   : 5px;
  font-size: ;
`;

