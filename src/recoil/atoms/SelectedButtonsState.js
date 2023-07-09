import { atom } from "recoil";

export const SelectedButtonsState= atom({
  key: 'selected-buttons',
  default: [
    {
      id: 0,
      label   : 'leftForward', 
      selected: false,
    },
    {
      id: 1,
      label   : 'leftReverse', 
      selected: false,
    },
    {
      id: 2,
      label   : 'rightForward',
      selected: false,
    },    
    {
      id: 3,
      label   : 'rightReverse',
      selected: false,
    },
    {
      id: 5,
      label   : 'rightTurn',
      selected: false,
    },
    {
      id: 6,
      label   : 'leftTurn',
      selected: false,
    },
    {
      id: 4,
      label   : 'speedBoost',
      selected: false,
    },
  ]
})