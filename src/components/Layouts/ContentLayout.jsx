import React          from 'react';
import styled         from 'styled-components';
import CodeIcon       from '@mui/icons-material/Code';
import GridViewIcon   from '@mui/icons-material/GridView';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

import { Sidebar } from '../ui';

export const SidebarMenuList= [
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

export const ContentLayout = ({children}) => {
	return (
    <ContentWrapper>
			<Sidebar menuList={SidebarMenuList} />
      {children}
    </ContentWrapper>
  )
}

const ContentWrapper= styled.main`
  display    : flex;
  grid-row   : 2;
  grid-column: 1;
  width      : 100%;
  height     : 100%;
  background : #ECECEC;
  padding    : 1rem;
`;
