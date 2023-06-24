import Button from '@mui/joy/Button';
import styled from 'styled-components';
import { purple } from '@mui/material/colors';

export const StyledButton = styled(Button)`
  && {
    background-color: ${props => (props.following ? '#5CD3A8' : '#EBD8FF')};
    color: #373737;
    transition: background-color 250ms linear;
    min-width: 196px;

    :hover {
      background-color: ${props => (props.following ? '#EBD8FF' : '#5CD3A8')};
      color: ${props => (props.following ? '#373737' : '#373737')};
    }
  }
`;
