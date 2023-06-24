import React from 'react';
import { NotFoundContainer, ErrorText } from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <ErrorText>Error 404: Page Not Found</ErrorText>
    </NotFoundContainer>
  );
};

export default NotFound;
