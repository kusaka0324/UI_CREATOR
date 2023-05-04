import WallpaperIcon from '@mui/icons-material/Wallpaper';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SettingsIcon from '@mui/icons-material/Settings';

export const menuList = [
  {
    id: 1,
    itemName : 'Background',
    icon     : WallpaperIcon,
    routePath: '/',
  },
  {
    id: 2,
    itemName : 'Display',
    icon     : SpaceDashboardIcon,
    routePath: '/display',
  },
  {
    id: 3,
    itemName : 'Styling',
    icon     : BorderColorIcon,
    routePath: '/styling',
  },
  {
    id: 4,
    itemName : 'Set Custom', 
    icon     : SettingsIcon,
    routePath: '/set_custom',
  },
];
