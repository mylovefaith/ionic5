import { LoadingModel, LoadingActionType } from "./types";

export const INITIAL_STATE:LoadingModel = {
  isLoading: false,
  loadingText: 'Loading...',
  err: null,
};

export default function(state:LoadingModel = INITIAL_STATE, action:LoadingActionType):LoadingModel {
  const { type } = action;
  const isLoading = /(.*)(LOGGING|UPDATING|LOADING)(.*)/.exec(type);
  const hasLoaded = /(.*)_(SUCCESS|FAILURE)/.exec(type);

  if(!isLoading && !hasLoaded) return state;

  if(isLoading) return {
    isLoading: true,
    loadingText: action.loadingText || state.loadingText,
    err: null,
  }

  if(hasLoaded) {
    if(type.includes('FAILURE')) {
      return {
        ...INITIAL_STATE,
        err: action.err || 'Unknown error'
      }
    }

    return {
      ...INITIAL_STATE,
      err: null,
    }
  }

  return state;
}
