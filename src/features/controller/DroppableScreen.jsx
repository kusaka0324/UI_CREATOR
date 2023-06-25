import React, { useState } from 'react';
import styled              from 'styled-components';
import { useRecoilState }  from 'recoil';
import { useDrop }         from 'react-dnd';

import { controllerList, dndItemTypes } from '@/data';
import { SetButtonsStyle }              from '@/recoil/selector';
import { DraggableBox }                 from './';
import { Screen }                       from '../screen';


export const DroppableScreen = () => {
  const [ droppedButtons, setDroppedButtons ] = useRecoilState(SetButtonsStyle);
  const [ includePosition, setIncludePosition]= useState({ left: 0, top : 0 });

  const [, drop] = useDrop(
    () => ({
      accept: dndItemTypes.CONTROLL_BUTTON,
      drop  : (item, monitor) => {
        const newButtons      = item.id;

        const includePositionX= monitor.getClientOffset().x;
        const includePositionY= monitor.getClientOffset().y;
        const delta           = monitor.getDifferenceFromInitialOffset();

        let left= Math.round(includePositionX + delta.x);
        let top = Math.round(includePositionY  + delta.y);

        setDroppedButtons((prevItems)=> Array.from(new Set([...prevItems, newButtons])));
        setIncludePosition({ left, top });
        return undefined;
      }
    }),
    []
  );
  
  return (
      <DroppableAreaStyle ref={drop} >
        { controllerList.map(({contents}) => (
          contents
            .filter(({id}) => droppedButtons.includes(id))
            .map(({index, id, Icon, opsName, rotate})=> (
              <DraggableBox 
                key    = {index}
                id     = {id}
                opsName= {opsName}
                Icon   = {Icon}
                rotate = {rotate}
                left   = {includePosition.left}
                top    = {includePosition.top}
              />
            ))
          ))
        }
      </DroppableAreaStyle>
	)
}

const DroppableAreaStyle= styled.div`
  position     : relative;
  background   : lightgray;
  height       : 100%;
  width        : 100%;
  margin       : 0;
  border-radius: 20px;
`;