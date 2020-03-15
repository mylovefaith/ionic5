import { apiService, localStorage, theme } from '../services';
import { t } from '.';
import { DEFAULT_AUTH_TOKEN, API, THEMES, MODES } from '../enums';

function restoreTheme({ mode, theme: localTheme}) {   
  const { DARK_CLASS }= MODES;

  theme.switchDarkMode(mode === DARK_CLASS);
  theme.switchTheme(localTheme);
}

function loadApp() {
  return async (dispatch, getState) => {
    // await GET LOCAL STORAGE
    const storageData = await localStorage.getStorageData();

    dispatch({
      type: t.LOAD_STORAGE,
      payload: storageData,
    })

    const { global } = getState();
    restoreTheme(global.localStorage);

    // await fetching initial store
    const store = await apiService.fetchPost(API.INIT);
    if(store.err) {
      return dispatch({
        type: t.FETCH_STORE_FAILURE,
        err: store,
      })
    }

    dispatch({
      type: t.FETCH_STORE_SUCCESS,
      payload: store,
    });
  }
}

export default loadApp;
