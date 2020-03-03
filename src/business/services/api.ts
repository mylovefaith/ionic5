import store from '../store';

export const authPost = async ({ url, params}) => {
  const state = store.getState()
  const { localStorage: { storeId, deviceId, userId, authToken } } = state.global;

  const options = {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: authToken,
      storeId,
      deviceId,
      userId,
    },
    body: params ? JSON.stringify(params) : undefined
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return Promise.resolve(result);
} 

export const fetchPost = async ({ url, params}) => {
  const state = store.getState()
  const { localStorage: { storeId, deviceId } } = state.global;

  const options = {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      storeId,
      deviceId,
    },
    body: params ? JSON.stringify(params) : undefined
  }

  const response = await fetch(url, options);
  const result = await response.json(); 

  return Promise.resolve(result);
}

