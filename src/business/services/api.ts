import store from '../store';
import { API_BASE } from '../../_init/config'

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

  const response = await fetch(`${API_BASE}/${url}`, options);
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

  const response = await fetch(`${API_BASE}/${url}`, options);
  const result = await response.json(); 

  return Promise.resolve(result);
}

