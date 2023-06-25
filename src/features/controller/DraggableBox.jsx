import React           from 'react';
import styled, { css } from 'styled-components';
import { useDrag }     from 'react-dnd';

import { Controller }   from './';
import { dndItemTypes } from '@/data';

export const DraggableBox= ({id, opsName, Icon, rotate, left, top}) => {
  const [{ isDragging }, drag ] = useDrag(
    () => ({
      type: dndItemTypes.CONTROLL_BUTTON,
      item: { id, opsName, left, top },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
		}),
		[id, opsName, left, top],
	);

  return (
    <DraggableBoxDiv ref={drag} left={left} top={top} >
      <Controller Icon={Icon} rotate={rotate} />
    </DraggableBoxDiv>
  );
};

const DraggableBoxDiv= styled.div`
  height    : 60px;
  width     : 60px;
  transition: 0.3s;
  
  ${(props)=> 
    css`
      left: ${props.left}px;
      top : ${props.top}px;
    `
  }
`;