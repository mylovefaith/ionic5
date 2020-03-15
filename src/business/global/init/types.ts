import { THEMES, MODES } from '../../enums';

export const LOAD_STORAGE = 'LOAD_STORAGE';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';

// Action Types
export interface LoadStorageType {
  type: typeof LOAD_STORAGE;
  localStorage: LocalStorageModel;
};

export interface FetchStoreSuccessType {
  type: typeof FETCH_STORE_SUCCESS;
  store: StoreModel;
}

export interface FetchStoreFailureType {
  type: typeof FETCH_STORE_FAILURE;
  err: string;
}

export type InitActionTypes = LoadStorageType | FetchStoreSuccessType | FetchStoreFailureType;

// Reducer Models
export interface LocalStorageModel {
  storeId: number;
  userId: number;
  deviceId: string;
  authToken: string;
  mode: MODES.types;
  theme: THEMES.types; 
}

export interface StoreModel {
  id: number;
  name: string;
  phone: string;
}

export interface InitModel {
  store: StoreModel;
  localStorage: LocalStorageModel;
  initSuccess: boolean;
}
