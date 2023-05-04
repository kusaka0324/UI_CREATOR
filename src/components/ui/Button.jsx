import React  from 'react';

export const Button = (
  {
    primary,
    secondary,
    variant,
    startIcon,
    endIcon,
    ...props
  }
) => {
  return (
    <button 
      
      {...props}
    >
      <span>{startIcon}</span>
      {props.children}
      
    </button>
  )
}

