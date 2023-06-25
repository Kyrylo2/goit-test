import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFollowingUsers } from 'redux/selectors';
import { ImageCatStyles, TweetsListStyled } from './TweetsList.styled';
import TweetsListItem from 'components/TweetsListItem/TweetsListItem';

export const TweetsList = ({
  allUsers,
  visibleUsersProps,
  filterSelector,
  handleLoadMoreButtonDisabled,
}) => {
  const [visibleUsers, setVisibleUsers] = useState(visibleUsersProps);

  const followedUsers = useSelector(getFollowingUsers);

  // Compare all users with followed users
  const compareUsers = (allUsers, followUsers) => {
    const followSet = new Set(followUsers.map(user => user.id));
    const followed = [];
    const notFollowed = [];

    for (const user of allUsers) {
      if (followSet.has(user.id)) {
        followed.push(user);
      } else {
        notFollowed.push(user);
      }
    }

    return {
      followed,
      notFollowed,
    };
  };

  // Check if a user is being followed
  const isFollowing = useCallback(
    user => {
      return followedUsers?.some(item => item.id === user.id);
    },
    [followedUsers]
  );

  // Filter visible users based on the selected filter
  useEffect(() => {
    const filteredUsers = visibleUsersProps.filter(user => {
      switch (filterSelector) {
        case 'all':
          return true; // Show all users
        case 'followed':
          return isFollowing(user); // Show only followed users
        case 'not followed':
          return !isFollowing(user); // Show only not followed users
        default:
          return false;
      }
    });

    setVisibleUsers(filteredUsers);
  }, [filterSelector, isFollowing, visibleUsersProps]);

  // Update the load more button disabled state based on all users and followed users
  useEffect(() => {
    if (visibleUsers) {
      handleLoadMoreButtonDisabled(compareUsers(allUsers, followedUsers));
    }
  }, [allUsers, followedUsers, handleLoadMoreButtonDisabled, visibleUsers]);

  return visibleUsers?.length > 0 ? (
    <TweetsListStyled>
      {visibleUsers.map(user => (
        <TweetsListItem
          user={user}
          key={user.id}
          following={isFollowing(user)}
        />
      ))}
    </TweetsListStyled>
  ) : (
    <>
      <div>No {filterSelector} users</div>
      <ImageCatStyles
        src={require('../../assets/images/NoDataCatImage/sad-cat-carnimee-transparent.png')}
        alt="cat"
      />
    </>
  );
};

export default TweetsList;
