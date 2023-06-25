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
  max-height : 100vh;
  max-width  : 100vw;
  grid-template-rows   : 80px 1fr;
  grid-template-columns: 1fr 1fr;
`;