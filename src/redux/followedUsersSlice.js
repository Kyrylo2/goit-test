import { createSlice } from '@reduxjs/toolkit';
import { produce } from 'immer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const followedUsersInitialState = {
  items: [],
};

const followedUsersSlice = createSlice({
  name: 'followedUsers',
  initialState: followedUsersInitialState,

  reducers: {
    addFollowingUser: (state, action) => {
      return produce(state, draftState => {
        draftState.items.push(action.payload);
      });
    },
    deleteFollowingUser: (state, action) => {
      return produce(state, draftState => {
        const index = draftState.items.findIndex(
          item => item.id === action.payload
        );
        draftState.items.splice(index, 1);
      });
    },
  },
});

const persistConfig = {
  key: 'followedUsers',
  storage,
};

export const { addFollowingUser, deleteFollowingUser } =
  followedUsersSlice.actions;

const followedUsersReducer = followedUsersSlice.reducer;

export const persistedFollowedUsersReducer = persistReducer(
  persistConfig,
  followedUsersReducer
);
