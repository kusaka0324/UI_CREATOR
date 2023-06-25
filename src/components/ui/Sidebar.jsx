import React          from 'react';
import styled,{ css } from 'styled-components';
import { NavLink }    from 'react-router-dom';

export const Sidebar = ({menuList}) => {
  const [ activePage, setActivePage ] = React.useState('Buttons');

  function handleButtonClick(title) {
    setActivePage(title);
  }
  
  return (
    <Navigation >
      <NavList >
        {menuList.map(({ id, title, path, icon }) => (
          <NavItemStyleDiv key={id} >   
            <NavItem 
              to={path} 
              active = {activePage == title }
              onClick= {() => handleButtonClick(title)}
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
    props.active && 
    css`
      color     : #FEFEFE;
      background: #6129FF;
      transition: 0.3s;
      &:hover {
        background: #6129FF;
      }
    `
  }
`;

