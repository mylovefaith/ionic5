import { apiService, localStorage, theme } from '../../services';
import { API, THEMES, MODES } from '../../enums';
import { InitActionTypes, FETCH_STORE_SUCCESS, FETCH_STORE_FAILURE, LOAD_STORAGE } from './types';
import { Dispatch } from 'redux';

function restoreTheme({ mode, theme: localTheme}: {mode: MODES.types, theme: THEMES.types }) {   
  const { DARK_CLASS } = MODES;

  theme.switchDarkMode(mode === DARK_CLASS);
  theme.switchTheme(localTheme);
}

export function loadApp() {
  return async (dispatch: Dispatch<InitActionTypes>, getState) => { 
    // await GET LOCAL STORAGE
    const storageData = await localStorage.getStorageData();

    dispatch({
      type: LOAD_STORAGE,
      localStorage: storageData,
    })

    const { global } = getState();
    restoreTheme(global.localStorage);

    // await fetching initial store
    const store = await apiService.fetchPost(API.INIT);
    if(store.err) {
      return dispatch({
        type: FETCH_STORE_FAILURE,
        err: store.err,
      })
    }

    dispatch({
      type: FETCH_STORE_SUCCESS,
      store
    });
  }
}
