import React from 'react';
import { Button } from '@mui/joy';

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

  return (
    <Button
      type={type}
      loading={loading}
      loadingPosition="start"
      variant="solid"
      disabled={loading}
      sx={{
        backgroundColor: following ? '#5CD3A8' : '#EBD8FF',
        color: '#373737',
        transition: 'backgroundColor 250ms linear, boxShadow 250ms linear',
        minWidth: '196px',
        ':hover': {
          backgroundColor: following ? '#EBD8FF' : '#5CD3A8',
          color: '#373737',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        },
      }}
      onClick={handleClick}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default ButtonStyled;
