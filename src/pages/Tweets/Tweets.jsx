import { LoadMoreButton } from 'components/LoadMoreButton/LoadMoreButton';
import { TweetsList } from 'components/TweetsList/TweetsList';

import React, { useState, useEffect } from 'react';
import { USERS_PER_PAGE } from 'services/constants';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUsers } from 'services/api';

import Spinner from 'components/Spinner/Spinner';
import { toast } from 'react-toastify';
import { useTweets } from 'hooks/useTweets';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { purple } from '@mui/material/colors';
import Select from '@mui/material/Select';
// import {
//   Breadcrumbs,
//   Button,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
// } from '@mui/material';
import Button from '@mui/joy/Button';
import { BreadcrumbsAndRadioButtonFilterContainer } from './Tweets.styled';

const Tweets = () => {
  const [page, setPage] = useState(1);
  const [visibleUsers, setVisibleUsers] = useState([]);
  const [filterSelector, setFilterSelector] = useState('all');

  const navigate = useNavigate();

  const { data, isError, isLoading, fetchStatus, status } = useTweets();

  useEffect(() => {
    if (status === 'success' && fetchStatus === 'idle')
      setVisibleUsers(data.slice(0, page * USERS_PER_PAGE));
  }, [page, data, fetchStatus, status]);

  const totalPages = () => Math.ceil(data.length / USERS_PER_PAGE);

  const onLoadMoreButton = () => {
    if (page >= totalPages) {
      return;
    }

    setPage(prevPage => prevPage + 1);
  };

  const onBackButtonClick = () => {
    navigate('/', { replace: true });
  };

  const handleFilterSelectorChange = event => {
    setFilterSelector(event.target.value);
  };

  console.log('----------------', visibleUsers, visibleUsers.length);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error</div>;

  return (
    <>
      <BreadcrumbsAndRadioButtonFilterContainer>
        <Button
          variant="outlined"
          onClick={onBackButtonClick}
          sx={{
            m: 1,
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
          Go back
        </Button>

        <FormControl
          sx={{
            m: 1,
            minWidth: 120,
            color: purple[50],
            '&.Mui-focused': {
              color: purple[800],
            },
            borderColor: purple[200],
            borderWidth: '1px',
            borderRadius: '4px',

            '&:hover > #filter-radio-button-label': {
              color: purple[600],
            },
          }}
        >
          <InputLabel
            id="filter-radio-button-label"
            sx={{
              color: purple[200],
              '&.Mui-focused': { color: purple[600] },
              '&:hover': {
                color: purple[600],
              },
            }}
          >
            Filter
          </InputLabel>
          <Select
            labelId="filter-radio-button-label"
            id="filter-radio-button"
            value={filterSelector}
            label="Filter"
            onChange={handleFilterSelectorChange}
            sx={{
              color: purple[50],
              fontWeight: '400',
              fontSize: '14px',
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: purple[200],
                borderWidth: '1px',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: purple[600],
                borderWidth: '1px',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: purple[600],
                borderWidth: '1px',
              },
              '.MuiSvgIcon-root ': {
                fill: 'white !important',
              },
            }}
            autoWidth
          >
            <MenuItem value={'all'}>All</MenuItem>
            <MenuItem value={'followed'}>Followed</MenuItem>
            <MenuItem value={'not followed'}>Not followed</MenuItem>
          </Select>
        </FormControl>
      </BreadcrumbsAndRadioButtonFilterContainer>
      {visibleUsers?.length > 0 ? (
        <TweetsList users={visibleUsers} filterSelector={filterSelector} />
      ) : (
        <>
          <div>No Photo</div>
          <img
            src={require('../../assets/images/NoDataCatImage/sad-cat-carnimee-transparent.png')}
            alt="cat"
          />
        </>
      )}
      <Button
        variant="outlined"
        onClick={onLoadMoreButton}
        sx={{
          m: 1,
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
        Load more
      </Button>
      {/* <LoadMoreButton type="button" onClick={onLoadMoreButton}>
        Load more
      </LoadMoreButton> */}
    </>
  );
};

export default Tweets;
