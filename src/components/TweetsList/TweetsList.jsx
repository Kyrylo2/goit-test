import { useSelector } from 'react-redux';
import { getFollowingUsers } from 'redux/selectors';
import { ImageCatStyles, TweetsListStyled } from './TweetsList.styled';
import TweetsListItem from 'components/TweetsListItem/TweetsListItem';

export const TweetsList = ({ users, filterSelector }) => {
  console.log('visibleUsers:', users);
  console.log('filteredSelector:', filterSelector); // data: 'all', 'followed', 'not followed'

  const followedUsers = useSelector(getFollowingUsers);
  console.log('followedUsers:', followedUsers);

  const isFollowing = user => {
    const res = followedUsers?.some(item => item.id === user.id);
    console.log('isFollowing:', res);
    return res;
  };

  const filteredUsers = users.filter(user => {
    if (filterSelector === 'all') {
      return true; // Показувати всіх користувачів
    } else if (filterSelector === 'followed') {
      return isFollowing(user); // Показувати тільки відслідковувані користувачі
    } else if (filterSelector === 'not followed') {
      return !isFollowing(user); // Показувати тільки не відслідковувані користувачі
    }
    return false;
  });

  return filteredUsers?.length > 0 ? (
    <TweetsListStyled>
      {filteredUsers.map(user => (
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
