import store from '../store';

export const authPost = async (url, param = {}) => {
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
    body: JSON.stringify(param)
  }

  const response = await fetch(`${process.env.REACT_APP_API_BASE}/${url}`, options).catch(handleErr);
  const result = await response.json();

  return Promise.resolve(result);
} 

export const fetchPost = async (url, param = {}) => {
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
    body: JSON.stringify(param)
  }

  const response = await fetch(`${process.env.REACT_APP_API_BASE}/${url}`, options).catch(handleErr);
  const result = await response.json();

  return Promise.resolve(result);
}

const handleErr = (err) => {
  console.warn(err);
  const resp = new Response(
    JSON.stringify({
      err: 'Network error',
      message: err.message,
    })
  )
  return resp
}
