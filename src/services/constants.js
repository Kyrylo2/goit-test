export const USERS_PER_PAGE = 3;

export const errorMessages = {
  fetchUsers: 'Failed to fetch users.',
  increaseFollowers: 'Failed to increase followers.',
  decreaseFollowers: 'Failed to decrease followers.',
};

export const createMessage = (action, successMessage, errorMessage) => {
  const pending = `${action}...`;
  const success = `${successMessage} successfully!`;
  const error = errorMessage;
  return { pending, success, error };
};
