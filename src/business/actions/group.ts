import { t } from './';

export function fetchGroup(groupId) {
  return async dispatch => {
    dispatch({
      type: t.LOADING
    })
    const fakeResponse = {
        id: 1,
        name: 'Test Group',
    }

    setTimeout(() => {
      dispatch({
        type: t.FETCH_GROUP_SUCCESS,
        payload: fakeResponse,
      })
    }, 1000)
  }
}

export function dehydrate() {
  return { type: t.CLEAN_GROUP}
}
