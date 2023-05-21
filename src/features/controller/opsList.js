import ForwardIcon   from '@/assets/forward.svg';
import ReverseIcon   from '@/assets/reverse.svg';
import LeftTurnIcon  from '@/assets/leftTurn.svg';
import RightTurnIcon from '@/assets/rightTurn.svg';
import BoostIcon     from '@/assets/speedBoost.svg';

export const opsList= [
  {
    id: 'left',
    head    : 'Left',
    contents: [
      {
        id: 'leftForward',
        opsName: '左前輪',
        opsIcon: ForwardIcon,
      },
      {  
        id: 'leftReverse',
        opsName: '左後輪',
        opsIcon: ReverseIcon,
      },
      {
        id: 'leftTurn',
        opsName: '右旋回',
        opsIcon: LeftTurnIcon,
      },
    ],
  },
  {
    id: 'right',
    head    : 'Right',
    contents: [
      {
        id: 'rightForward',
        opsName: '右前輪',
        opsIcon: ForwardIcon,
      },
      {
        id: 'rightReverse',
        opsName: '右後輪',
        opsIcon: ReverseIcon,
      },
      {
        id: 'rightTurn',
        opsName: '左旋回',
        opsIcon: RightTurnIcon,
      },
    ],
  },
  {
    id: 'option',
    head    : 'Option',
    contents: [
      {
        id: 'speedBoost',
        opsName: 'ブースト',
        opsIcon: BoostIcon,
      },
    ],
  },
];