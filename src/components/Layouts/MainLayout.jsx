import React  from 'react';
import styled from 'styled-components';

import { Topber } from '../ui';

export const MainLayout = ({children}) => {
	return (
    <MainWrapper>
			<Topber />
			{children}
		</MainWrapper>
  )
}

const MainWrapper= styled.div`
  display    : grid;
  margin     : 0;
  min-height : 100vh;
  min-width  : 100vw;
  grid-template-rows   : 100px 1fr;
  grid-template-columns: 1fr 1fr;
`;