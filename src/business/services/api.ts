import store from '../redux';

export const authPost = async (url, param = {}) => {
  const state = store.getState();
  const {
    localStorage: { storeId, deviceId, userId, authToken },
  } = state.init;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authToken,
      storeId: storeId ? storeId.toString() : '',
      deviceId: deviceId ? deviceId.toString() : '',
      userId: userId ? userId.toString() : '',
    },
    body: JSON.stringify(param),
  };

  const response = await fetch(`${process.env.REACT_APP_API_BASE}/${url}`, options).catch(handleErr);
  const result = await response.json();

  return Promise.resolve(result);
};

export const fetchPost = async (url, param = {}) => {
  const state = store.getState();
  const {
    localStorage: { storeId, deviceId },
  } = state.init;

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      storeId: storeId ? storeId.toString() : '',
      deviceId: deviceId ? deviceId.toString() : '',
    },
    body: JSON.stringify(param),
  };

  const response = await fetch(`${process.env.REACT_APP_API_BASE}/${url}`, options).catch(handleErr);
  const result = await response.json();

  return Promise.resolve(result);
};

const handleErr = err => {
  console.warn(err);
  const resp = new Response(
    JSON.stringify({
      err: 'Network error',
      message: err.message,
    }),
  );
  return resp;
};
