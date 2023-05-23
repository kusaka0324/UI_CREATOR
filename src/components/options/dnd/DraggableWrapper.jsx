import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


export const DraggableLayer = ({ id, itemName, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BOX,
    item: { 
      id  : { id }, 
      name: { itemName }, 
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} >
      { children }
    </div>
  );
};
