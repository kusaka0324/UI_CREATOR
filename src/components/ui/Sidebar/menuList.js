import WallpaperIcon from '@mui/icons-material/Wallpaper';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SettingsIcon from '@mui/icons-material/Settings';

export const menuList = [
  {
    id: 1,
    itemName : 'Background',
    Icon     : WallpaperIcon,
    routePath: '/',
  },
  {
    id: 2,
    itemName : 'Display',
    Icon     : SpaceDashboardIcon,
    routePath: '/display',
  },
  {
    id: 3,
    itemName : 'Styling',
    Icon     : BorderColorIcon,
    routePath: '/styling',
  },
  {
    id: 4,
    itemName : 'Set Custom', 
    Icon     : SettingsIcon,
    routePath: '/set_custom',
  },
];
