export const LOADING = 'LOADING';

// Action Model
export interface LoadingType {    // loading reducer
  type: typeof LOADING;
  loadingText?: string;
  err?: string;
};

export type LoadingActionTypes = LoadingType;

// Reducer Model
export interface LoadingModel {
  isLoading: boolean;
  loadingText?: string;
  hasError: boolean;
  err: string;
}

export const LOADING_INIT_STATE:LoadingModel = {
  isLoading: false,
  loadingText: 'Loading...',
  hasError: false,
  err: '',
}
