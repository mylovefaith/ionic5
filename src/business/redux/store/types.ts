export const SET_STORE = 'SET_STORE';
export const CLEAN_STORE = 'CLEAN_STORE';

// Action Types
export interface SetStoreType {
  type: typeof SET_STORE;
  store: StoreModel;
}

export interface CleanStoreType {
  type: typeof CLEAN_STORE;
}

export type StoreActionTypes = SetStoreType | CleanStoreType;

// Reducer Model
export interface StoreModel {
  id: number;
  storeCode: string;
}

export const STORE_INIT_STATE = {
  id: 0,
  storeCode: '',
};
