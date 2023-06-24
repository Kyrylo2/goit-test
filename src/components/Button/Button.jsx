import React from 'react';
import { StyledButton } from './Button.styled';
import SaveIcon from '@mui/icons-material/Save';

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
      following={following} // Передаємо рядок замість логічного значення
      // sx={buttonStyle}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </StyledButton>
  );
};

export default ButtonStyled;
