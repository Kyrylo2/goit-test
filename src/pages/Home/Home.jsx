import React from 'react';
import {
  HomeContainer,
  HomeImage,
  HomeImageDiv,
  HomeImageDivContainer,
  HomeTextMain,
  HomeTextSecondary,
} from './Home.styled';
import { Button, Link } from '@mui/joy';
import { purple } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomeImageDivContainer>
        <HomeImageDiv>
          <HomeImage
            src={require('../../assets/images/HomeImages/Follow.png')}
            alt="logo"
          />
          <HomeImage
            src={require('../../assets/images/HomeImages/Following.png')}
            alt="logo"
          />
          <HomeImage
            src={require('../../assets/images/HomeImages/Following.png')}
            alt="logo"
          />
          <HomeImage
            src={require('../../assets/images/HomeImages/Follow.png')}
            alt="logo"
          />
          <HomeImage
            src={require('../../assets/images/HomeImages/Follow.png')}
            alt="logo"
          />
          <HomeImage
            src={require('../../assets/images/HomeImages/Following.png')}
            alt="logo"
          />
          <HomeImage
            src={require('../../assets/images/HomeImages/Follow.png')}
            alt="logo"
          />
        </HomeImageDiv>
      </HomeImageDivContainer>
      <HomeContainer>
        <HomeTextMain>
          Welcome to GoIt Tweetser, the ultimate social media app!
        </HomeTextMain>
        <HomeTextSecondary>
          Enjoy browsing interesting user profiles, easily managing your
          follower status, and filtering content.
        </HomeTextSecondary>
        {/* <HomeTextAction>Start your exciting journey now!</HomeTextAction> */}
        <Button
          component={NavLink}
          to="/tweets"
          variant="outlined"
          sx={{
            // m: 1,
            minWidth: 120,
            color: purple[50],
            borderColor: purple[200],
            borderWidth: '1px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '400',
            '&.Mui-focused': {
              color: purple[800],
            },
            '&:hover': {
              borderColor: purple[600],
              borderWidth: '1px',
              backgroundColor: purple[600],
              color: purple[50],
            },
          }}
        >
          Start your exciting journey now!
        </Button>
        <Button
          component={Link}
          variant="outlined"
          href="https://www.linkedin.com/in/savchenko-kyrylo/"
          sx={{
            // m: 1,
            minWidth: 120,
            color: purple[50],
            borderColor: purple[200],
            borderWidth: '1px',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '400',
            '&.Mui-focused': {
              color: purple[800],
            },
            '&:hover': {
              borderColor: purple[600],
              borderWidth: '1px',
              backgroundColor: purple[600],
              color: purple[50],
              textDecorationLine: 'none',
            },
          }}
        >
          And join me on LinkedIn
        </Button>
      </HomeContainer>
    </>
  );
};

export default Home;
