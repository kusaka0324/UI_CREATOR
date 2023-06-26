import React from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

export const ColorPalette = () => {
  const [color, setColor] = useColor("hex", "#121212");

  return(
    <div>
      <ColorPicker 
        width={250} 
        height={150} 
        color={color} 
        onChange={setColor} 
        hideHSV 
        hideRGB
        dark 
      />      
    </div>
  );
}


