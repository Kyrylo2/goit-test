import React from 'react';
import { StyledButton } from './Button.styled';

const ButtonStyled = ({
  selected = false,
  loading = false,
  type = 'button',
  following = false,
  children,
  onClick,
  ...otherProps
}) => {
  const handleClick = event => {
    if (!loading && onClick) {
      onClick(event);
    }
  };

  console.log('Button clicked', following);

  return (
    <StyledButton
      type={type}
      loading={loading}
      loadingPosition="start"
      variant="solid"
      disabled={loading}
      following={following}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonStyled;
