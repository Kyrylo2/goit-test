import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6491ea672f2c7ee6c2c92653.mockapi.io',
});

const handleRequest = async requestConfig => {
  try {
    const response = await requestConfig;
    return response.data;
  } catch (error) {
    console.error('Request error:', error);
    throw new Error(error.message);
  }
};

const updateUserFollowers = async (user, followersDelta) => {
  const requestConfig = api.put(`/users/${user.id}`, {
    followers: +user.followers + followersDelta,
  });
  return handleRequest(requestConfig);
};

export const getUsers = async () => {
  const requestConfig = api.get('/users');
  return handleRequest(requestConfig);
};

export const increaseFollowers = async user => {
  return updateUserFollowers(user, 1);
};

export const decreaseFollowers = async user => {
  return updateUserFollowers(user, -1);
};
