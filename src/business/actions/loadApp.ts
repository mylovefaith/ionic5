import { localStorage } from '../services';
import { t } from './';

function loadApp() {
  return async dispatch => {
    // await GET LOCAL STORAGE
    const storageData = await localStorage.getStorageData();

    setTimeout(function() {
      // await FECH INIT
      dispatch({
        type: t.LOAD_STORAGE,
        payload: storageData
      })

      dispatch({
        type: t.FETCH_STORE_SUCCESS,
        payload: {
          id: 1,
          name: 'Antioch',
          phone: '111-222-3333',
        }
      })
    }, 0)
    
  }
}

export default loadApp;
