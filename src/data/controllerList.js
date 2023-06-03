import PlayArrowIcon           from '@mui/icons-material/PlayArrow';
import RotateLeftIcon          from '@mui/icons-material/RotateLeft';
import RotateRightIcon         from '@mui/icons-material/RotateRight';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

export const controllerList= [
  {
    id      : 'left',
    head    : 'Left',
    contents: [
      {
        id     : 0,
        opsName: '左前輪',
        Icon   : PlayArrowIcon,
        rotate : '-90deg',
      },
      {  
        id     : 1,
        opsName: '左後輪',
        Icon   : PlayArrowIcon,
        rotate : '90deg',
      },
      {
        id     : 6,
        opsName: '右旋回',
        Icon   : RotateLeftIcon,
      },
    ],
  },
  {
    id      : 'right',
    head    : 'Right',
    contents: [
      {
        id     : 2,
        opsName: '右前輪',
        Icon   : PlayArrowIcon,
        rotate : '-90deg',
      },
      {
        id     : 3,
        opsName: '右後輪',
        Icon   : PlayArrowIcon,
        rotate : '90deg',
      },
      {
        id     : 5,
        opsName: '左旋回',
        Icon   : RotateRightIcon,
      },
    ],
  },
  {
    id      : 'option',
    head    : 'Option',
    contents: [
      {
        id     : 4,
        opsName: 'ブースト',
        Icon   : LocalFireDepartmentIcon,
      },
    ],
  },
];