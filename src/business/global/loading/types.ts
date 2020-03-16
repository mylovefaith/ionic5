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
  err: string;
}
