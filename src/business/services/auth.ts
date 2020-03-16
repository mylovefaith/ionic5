import store from '../redux';

export const getAuthToken = (): string => {
  const { init } = store.getState();

  return init.localStorage.authToken;
};

export const isLoggedIn = (): boolean => {
  const { init } = store.getState();

  return init.localStorage.authToken !== '';
};
