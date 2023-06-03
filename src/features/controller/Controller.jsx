import React  from 'react';
import styled, {css} from 'styled-components';

export const Controller= ({ left, top, Icon, rotate }) => {
  return (
    <BoxStyle left={left} top={top}>
			<Icon style={{ rotate: `${rotate}`}} />
		</BoxStyle>
	)
}

const BoxStyle= styled.div`  
  display        : flex;
  justify-content: center;
  align-items    : center;
  width          : 4.5rem;
  height         : 4.5rem;
  border         : 0;
  outline        : 0;
  background     : #d4d4d4;
  ${(props) =>
    css`
      left: ${props.left}px;
      top : ${props.top}px;
    `
  }
`;
