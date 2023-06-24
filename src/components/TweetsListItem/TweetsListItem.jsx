import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  addFollowingUser,
  deleteFollowingUser,
} from 'redux/followedUsersSlice';
import {
  Avatar,
  AvatarWrapper,
  BackImage,
  CenterLine,
  UserCard,
  UserInfoAndButtonContainer,
  UserInfoWrapper,
} from './TweetsListItem.styled';
import ButtonStyled from 'components/Button/Button';
import { decreaseFollowers, increaseFollowers } from 'services/api';

const TweetsListItem = memo(({ user, following }) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(follow => {
    const followAction = follow ? increaseFollowers : decreaseFollowers;
    return followAction(user);
  });

  const handleFollowAction = useCallback(
    async follow => {
      try {
        await mutateAsync(follow);
        if (follow) {
          dispatch(addFollowingUser(user));
        } else {
          dispatch(deleteFollowingUser(user.id));
        }
        queryClient.invalidateQueries(['users']);
      } catch (error) {
        console.error('Error:', error);
      }
    },
    [dispatch, queryClient, user, mutateAsync]
  );

  const handleFollowClick = useCallback(() => {
    handleFollowAction(true);
  }, [handleFollowAction]);

  const handleUnfollowClick = useCallback(() => {
    handleFollowAction(false);
  }, [handleFollowAction]);

  const buttonLabel = isLoading
    ? 'LOADING'
    : following
    ? 'FOLLOWING'
    : 'FOLLOW';
  const handleClick = following ? handleUnfollowClick : handleFollowClick;

  return (
    <UserCard>
      <img src={require('../../assets/Logo.png')} alt="logo" />
      <BackImage
        src={require('../../assets/images/TweetCardImages/mainPicture.png')}
        alt=""
      />
      <AvatarWrapper>
        <Avatar src={user.avatar} alt="user avatar" />
      </AvatarWrapper>
      <CenterLine />
      <UserInfoAndButtonContainer>
        <UserInfoWrapper>
          <p>{user.tweets.toLocaleString('en-GB')} TWEETS</p>
          <p>{user.followers.toLocaleString('en-GB')} FOLLOWERS</p>
        </UserInfoWrapper>
        <ButtonStyled
          type="button"
          onClick={handleClick}
          following={following}
          loading={isLoading}
          disabled={isLoading}
        >
          {buttonLabel}
        </ButtonStyled>
      </UserInfoAndButtonContainer>
    </UserCard>
  );
});

export default TweetsListItem;
