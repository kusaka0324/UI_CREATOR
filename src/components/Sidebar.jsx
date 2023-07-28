import React                    from 'react';
import styled,{ css }           from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import CodeIcon                 from '@mui/icons-material/Code';
import GridViewIcon             from '@mui/icons-material/GridView';
import SmartphoneIcon           from '@mui/icons-material/Smartphone';

const SidebarMenuList= [
	{
		id   : 0,
		title: 'Buttons',
		path : '/',
		icon : <GridViewIcon />,
	},
	{
		id   : 1,
		title: 'Code',
		path : '/code_edit',
		icon : <CodeIcon />
	},
	{
		id   : 2,
		title: 'Preview',
		path : '/preview',
		icon : <SmartphoneIcon />
	},
];

export const Sidebar = () => {
  const activeLocation = useLocation();

  const isActive = (pathname) => {
    return activeLocation.pathname === pathname;
  };

  return (
    <Navigation >
      <NavList >
        {SidebarMenuList.map(({ id, title, path, icon }) => (
          <NavItemStyleDiv key={id} >   
            <NavItem 
              to= {path} 
              className={isActive(path) ? 'active' : ''}
            >
              {icon}
            </NavItem>
            <span>{title}</span>          
          </NavItemStyleDiv>
        ))}
      </NavList>
    </Navigation>
  )
}

const Navigation= styled.nav`
  margin       : 1.25rem;
  padding-top  : 2.15rem;
  height       : calc(100vh - 150px);
  width        : 80px;
  border-radius: 20px;
  background   : #FEFEFE;
  box-shadow   : 2px 2px 2px 2px #a4a4a4;
  flex-shrink  : 0; 
`;

const NavList= styled.ul`
  height        : 100%;
  width         : 100%;
  list-style    : none;
`;

const NavItemStyleDiv= styled.div`
  display       : flex;
  flex-direction: column;
  align-items   : center;
  row-gap       : 15px;
  margin-bottom : 25px;

  > span {
    color      : #747474;
    font-size  : 0.825rem; 
    font-weight: bold;
  }
`;

const NavItem= styled(NavLink)`
  display        : flex;
  flex-direction : column;
  align-items    : center;
  justify-content: center;
  height         : 3rem;
  width          : 3rem;
  outline        : 0;
  border         : 0;
  border-radius  : 15px;
  color          : #6129FF;
  background     : #FEFEFE;
  text-decoration: none;

  &:hover {
    background: #eee9ff;
  }
  ${(props) => 
    props.className == 'active' 
    ? css`
        color     : #FEFEFE;
        background: #6129FF;
        transition: 0.3s;
        &:hover {
          background: #6129FF;
        }
      `
    : css`
      color          : #6129FF;
      background     : #FEFEFE;
    `
  }
`;

