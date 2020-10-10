import { CLEAN_STORE, StoreActionTypes } from './types';

export function cleanStore(): StoreActionTypes {
  return {
    type: CLEAN_STORE,
  };
}
