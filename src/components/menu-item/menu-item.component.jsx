import React from 'react';
import {withRouter} from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
} from './menu-item.styles';

const MenuItem = ({ name, image, size }) => (
  <MenuItemContainer
    size={size}
  >
    <BackgroundImageContainer
      className='background-image'
      image={image}
    />
    <ContentContainer className='content'>
      <ContentTitle>{name}</ContentTitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);