import React  from 'react';

import styled from 'styled-components';

export const IconButton = (props) => {
  const { Icon, path } = props;

  return (
    <ButtonLink to={path} >
      <div >
        <Icon/>  
      </div>
    </ButtonLink>
  )
}

const ButtonLink = styled.a`

  > div {

  };

  > Icon {

  };
`;