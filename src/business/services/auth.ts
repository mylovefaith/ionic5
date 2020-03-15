import store from '../store';

export const getAuthToken = (): string => {
  const { global } = store.getState();

  return global.localStorage.authToken;
};

export const isLoggedIn = (): boolean => {
  const { global } = store.getState();

  return global.localStorage.authToken !== null;
};
