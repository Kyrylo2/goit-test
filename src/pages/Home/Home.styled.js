import styled, { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, #667eea, #764ba2);
  color: #ffffff;
  animation: ${gradientAnimation} 10s ease-in-out infinite; */
`;

export const HomeText = styled.h1`
  font-weight: bold;
  font-size: 3rem;
`;
