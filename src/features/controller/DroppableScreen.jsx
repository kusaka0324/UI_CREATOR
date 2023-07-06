import React, { useState } from 'react';
import styled              from 'styled-components';
import { useRecoilState }  from 'recoil';
import { useDrop }         from 'react-dnd';

import { controllerList, dndItemTypes } from '@/data';
import { IncludeButtonsIdState }        from '@/recoil/atoms';
import { DraggableBox }                 from './';

export const DroppableScreen = () => {
  const [ droppedButtons, setDroppedButtons ]  = useRecoilState(IncludeButtonsIdState);
  const [ includePosition, setIncludePosition ]= useState({ left: 0, top : 0 });

  const [, drop] = useDrop(
    () => ({
      accept: dndItemTypes.CONTROLL_BUTTON,
      drop  : (item, monitor) => {
        const newButtons      = item.id;

        const includePositionX= monitor.getClientOffset().x;
        const includePositionY= monitor.getClientOffset().y;
        const delta           = monitor.getDifferenceFromInitialOffset();

        let left= Math.round(includePositionX + delta.x);
        let top = Math.round(includePositionY + delta.y);

        setDroppedButtons((prevItems)=> Array.from(new Set([...prevItems, newButtons])));
        setIncludePosition({ left, top });
        return undefined;
      }
    }),
    []
  );
  return (
      <DroppableAreaStyle ref={drop} >
      </DroppableAreaStyle>
	)
}

const DroppableAreaStyle= styled.div`
  position     : absolute;
  height       : 100%;
  width        : 100%;
  margin       : 0;
  border-radius: 20px;
  opacity: 0;
`;