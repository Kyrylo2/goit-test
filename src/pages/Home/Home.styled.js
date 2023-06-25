import { purple } from '@mui/material/colors';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: flex-start;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 30px;
  width: 400px;
  margin-right: auto;
`;

export const HomeTextMain = styled.h1`
  color: ${purple[50]};
  font-weight: bold;
  font-size: 3rem;
  z-index: 1;
`;

export const HomeTextSecondary = styled.h2`
  color: ${purple[100]};
  font-weight: 500;
  font-size: 2rem;
`;

export const HomeTextAction = styled.button``;

export const HomeImageDivContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  pointer-events: none;
`;

export const HomeImageDiv = styled.div`
  position: absolute;
  opacity: 0.2;
  top: -50%;
  left: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  perspective: 1000px;
  transform: rotate3d(2, 0.7, 0.7, 295deg);
`;

export const HomeImage = styled.img``;
