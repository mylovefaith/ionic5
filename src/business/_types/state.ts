import StoreType from './store';
import UserType from './user';
import ErrorType from './error';
import GroupType from './group';

export interface LocalStorageType {
  storeId: number;
  userId: number;
  deviceId: string;
  authToken: string;
  mode: string;
  theme: string; 
}

export interface GlobalModel {
  store: StoreType;
  user: UserType;
  device: string;
  initSuccess: boolean;
  localStorage: LocalStorageType;
}

export interface LoadingType {
  isLoading: boolean;
  loadingText: string;
  error: ErrorType;
}

export interface RoutingType {
  currentRoute: string;
  previousRoute: string;
}
