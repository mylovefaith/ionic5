import { apiService, localStorage, theme } from '../../services';
import { API, THEMES, MODES } from '../../enums';
import { FETCH_STORE_SUCCESS, FETCH_STORE_FAILURE, LOAD_STORAGE } from './types';
import { Dispatch } from 'redux';
import { AnyActionType } from '../../types';
import { AppModel } from '../../store';
import { LOADING } from '../loading/types';
import { SET_USER } from '../user/types';

function restoreTheme({ mode, theme: localTheme }: { mode: MODES.types; theme: THEMES.types }) {
  const { DARK_CLASS } = MODES;

  theme.switchDarkMode(mode === DARK_CLASS);
  theme.switchTheme(localTheme);
}

async function loadStorage(dispatch) {
  const storageData = await localStorage.getStorageData();

  dispatch({
    type: LOAD_STORAGE,
    localStorage: storageData,
  });
}

async function fetchStore(dispatch) {
  const response = await apiService.fetchPost(API.INIT);
  if (response.err) {
    return dispatch({
      type: FETCH_STORE_FAILURE,
      err: response.err,
    });
  }

  dispatch({
    type: SET_USER,
    user: response.user || null,
  })

  dispatch({
    type: FETCH_STORE_SUCCESS,
    store: response.store,
  });
}

export function loadApp() {
  return async (dispatch: Dispatch<AnyActionType>, getState: () => AppModel) => {
    dispatch({ 
      type: LOADING, loadingText: 'Initializing App...' });

    // Load LOCAL STORAGE
    await loadStorage(dispatch);

    // Load Theme
    const { global } = getState();
    restoreTheme(global.localStorage);

    // Fetching initial store
    await fetchStore(dispatch);
  };
}
