import React  from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { menuList } from './menuList';

export const Sidebar = () => {
  return (
    <Navigation>
      <ul>
        {menuList.map((
          {
            id,
            itemName,
            Icon,
            routePath
          }
        ) => (
          <li key={id}>
            <NavLink to={routePath} >
              <Icon/>
            </NavLink>
            <span>{itemName}</span>            
          </li>
        ))}
      </ul>
    </Navigation>
  );
};


const Navigation = styled.nav`
  margin          : 30px 0px 0px 30px;
  width           : 120px;
  height          : 650px;
  background-color: #2B2B2B;
  border-radius   : 20px;
  opacity         : 0.8;

  > ul {
    list-style : none;
    padding-top: 50px;

    > li {
      display        : flex;
      flex-direction : column;
      align-items    : center;
      height         : 100%;
      width          : 100%;
      color          :#FFFDFD;
      font-size      : 14px;
      font-weight    : 600;
      font-family    : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      text-decoration: none;
  
      > a {
        display         : flex;
        justify-content : center;
        align-items     : center;
        margin          : 10px;
        height          : 77px;
        width           : 75px;
        color           : #2962FF;
        background-color: #C9E8FF;
        border          : 3px solid #2962FF;
        border-radius   : 50%;
      
        &:hover {
          color: #2962FF;
          background: #e0f1ff;
          transition:0.5s;
        }
      }
    }
  }
`;
