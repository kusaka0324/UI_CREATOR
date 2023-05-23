import React from 'react';
import { useDrop } from 'react-dnd';

const targetStyle = {
  backgroundColor: 'lightgray',
  height: '10rem',
  width: '100%',
  margin: '1rem 0',
};

export const DroppableArea = ({ onDrop, children }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      style={{
        ...targetStyle,
        backgroundColor: isActive ? 'darkgray' : 'lightgray',
      }}
    >
      {isActive ? 'Release to drop' : 'Drag a box here'}
      { children }
    </div>
  );
};
