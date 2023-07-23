import { atom } from "recoil";

export const SelectedButtonsState= atom({
  key: 'selected-buttons',
  default: [
    {
      id: 0,
      label   : 'LeftForward', 
      selected: false,
    },
    {
      id: 1,
      label   : 'LeftReverse', 
      selected: false,
    },
    {
      id: 2,
      label   : 'RightForward',
      selected: false,
    },    
    {
      id: 3,
      label   : 'RightReverse',
      selected: false,
    },
    {
      id: 5,
      label   : 'RightTurn',
      selected: false,
    },
    {
      id: 6,
      label   : 'LeftTurn',
      selected: false,
    },
    {
      id: 4,
      label   : 'SpeedBoost',
      selected: false,
    },
  ]
})