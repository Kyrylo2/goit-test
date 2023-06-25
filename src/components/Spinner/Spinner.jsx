import styled, { keyframes } from 'styled-components';

import { purple } from '@mui/material/colors';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-top: 100px;
`;

const LoaderAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 5px solid #ccc;
  border-top-color: ${purple[600]};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${LoaderAnimation} 1s infinite linear;
`;

const Spinner = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default Spinner;
