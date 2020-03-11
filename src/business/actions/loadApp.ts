import { apiService, localStorage, theme } from '../services';
import { t } from './';
import { DEFAULT_AUTH_TOKEN } from '../enums';

function restoreTheme({ mode, theme: localTheme}) {   
  const { DARK_THEME_CLASS }= theme;

  theme.switchDarkMode(mode === DARK_THEME_CLASS);
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
    const store = await apiService.fetchPost('init.php');
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
