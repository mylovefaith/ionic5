import { getStorageData } from '../services/local.storage';
import { t } from './';

function loadApp() {
  return async dispatch => {
    // await GET LOCAL STORAGE
    const storageData = await getStorageData();

    setTimeout(function() {
      // await FECH INIT
      dispatch({
        type: t.LOAD_STORAGE,
        payload: storageData
      })

      dispatch({
        type: t.FETCH_STORE,
        payload: {
          id: 1,
          name: 'Antioch',
          phone: '111-222-3333',
        }
      })
    }, 3000)
    
  }
}

export default loadApp;
