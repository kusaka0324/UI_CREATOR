import React          from 'react';
import styled         from 'styled-components';

import { Sidebar } from '../ui';

export const ContentLayout = ({children}) => {
	return (
    <ContentWrapper>
			<Sidebar />
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
