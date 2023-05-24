import PlayArrowIcon   from '@mui/icons-material/PlayArrow';
import RotateLeftIcon  from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export const opsList= [
  {
    id: 'left',
    head    : 'Left',
    contents: [
      {
        id: 'leftForward',
        opsName: '左前輪',
        Icon   : PlayArrowIcon,
        rotate : '-90deg',
      },
      {  
        id: 'leftReverse',
        opsName: '左後輪',
        Icon   : PlayArrowIcon,
        rotate: '90deg',
      },
      {
        id: 'leftTurn',
        opsName: '右旋回',
        Icon: RotateLeftIcon,
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
        Icon   : PlayArrowIcon,
        rotate : '-90deg',
      },
      {
        id: 'rightReverse',
        opsName: '右後輪',
        Icon   : PlayArrowIcon,
        rotate : '90deg',
      },
      {
        id: 'rightTurn',
        opsName: '左旋回',
        Icon: RotateRightIcon,
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
        Icon: LocalFireDepartmentIcon,
      },
    ],
  },
];