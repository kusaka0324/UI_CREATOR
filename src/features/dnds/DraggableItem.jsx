import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from './ItemTypes';

export const DraggableItem = ({ id, itemName, children }) => {
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
      handlerId : monitor.getHandlerId(),
    }),
  });

  return (
    <div ref={drag} >
      {children}
    </div>
  );
};
