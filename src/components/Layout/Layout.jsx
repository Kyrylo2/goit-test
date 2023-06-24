import { Outlet } from 'react-router-dom';
import {
  FooterContainer,
  Container,
  HeaderContainer,
  Link,
  Logo,
  MainContainer,
  BackgroundLayer,
  FooterStylesDiv,
} from './Layout.styled';
import { Suspense } from 'react';
import Spinner from 'components/Spinner/Spinner';

const Layout = () => {
  return (
    <BackgroundLayer>
      <Container>
        <HeaderContainer>
          <Logo>GoIt Test Task</Logo>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/tweets">Tweets</Link>
          </nav>
        </HeaderContainer>
        <MainContainer>
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </MainContainer>
        <FooterContainer>
          <FooterStylesDiv>
            Created by{' '}
            <a href="https://www.linkedin.com/in/savchenko-kyrylo/">
              Kyrylo Savchenko
            </a>
          </FooterStylesDiv>
        </FooterContainer>
      </Container>
    </BackgroundLayer>
  );
};

export default Layout;
