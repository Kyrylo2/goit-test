import Button from '@mui/joy/Button';
import styled from 'styled-components';

export const LoadMoreButtonStyled = styled(Button)`
  && {
    background-color: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
    color: #373737;
    transition: background-color 250ms linear;

    :hover {
      background-color: #7b2ec6;
      color: #fff;
    }
  }
`;
