import { apiService, localStorage } from '../services';
import { t } from './';

function loadApp() {
  return async dispatch => {
    // await GET LOCAL STORAGE
    const storageData = await localStorage.getStorageData();
    dispatch({
      type: t.LOAD_STORAGE,
      payload: storageData
    })

    // await fetching initial store
    const store = await apiService.fetchPost('init.php');
    dispatch({
      type: t.FETCH_STORE_SUCCESS,
      payload: store
    });
  }
}

export default loadApp;
