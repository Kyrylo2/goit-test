import { LoadMoreButtonStyled } from './LoadMoreButton.styled';

export const LoadMoreButton = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <LoadMoreButtonStyled type={type} {...otherProps}>
      {children}
    </LoadMoreButtonStyled>
  );
};
