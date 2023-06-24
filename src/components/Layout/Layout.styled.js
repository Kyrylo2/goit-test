import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { purple } from '@mui/material/colors';

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

export const BackgroundLayer = styled.div`
  background: linear-gradient(to right, #667eea, #764ba2);
  color: #ffffff;
  animation: ${gradientAnimation} 2s ease-in-out infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
`;

export const Container = styled.div`
  display: flex;
  /* padding: 10px; */
  align-items: center;
  height: 100%;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
  flex-direction: column;
`;

export const FooterContainer = styled.footer`
  display: flex;
  padding: 10px;
  width: 100%;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  justify-content: center;
`;

export const FooterStylesDiv = styled.div`
  color: ${purple[50]};
  font-size: '14px';
  font-weight: 400;
`;

export const HeaderContainer = styled.header`
  display: flex;
  padding: 10px;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;
  justify-content: space-between;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }

  > nav {
    display: flex;
    gap: 10px;
  }
`;

export const MainContainer = styled.main`
  display: flex;
  flex: 1;
  /* padding: 10px; */
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-width: 320px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
  display: flex;
  width: 1200px;
  justify-content: space-between;
  flex-direction: column;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  /* font-size: 1em; */
  color: ${purple[50]};
  font-weight: 400;
  border: 1px solid ${purple[200]};

  &.active {
    color: #fff9f9;
    background-color: ${purple[600]};
    border: none;
  }
`;
