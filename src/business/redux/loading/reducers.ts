import { LoadingModel, LoadingActionTypes, LOADING_INIT_STATE } from './types';

export default function(
  state: LoadingModel = LOADING_INIT_STATE,
  action: LoadingActionTypes
): LoadingModel {
  const { type } = action;
  const isLoading = /(.*)(LOGGING|UPDATING|LOADING)(.*)/.exec(type);
  const hasLoaded = /(.*)_(SUCCESS|FAILURE)/.exec(type);

  if (!isLoading && !hasLoaded) return state;

  if (isLoading)
    return {
      ...LOADING_INIT_STATE,
      isLoading: true,
      loadingText: action.loadingText || state.loadingText,
      hasError: false,
    };

  if (hasLoaded) {
    if (type.includes('FAILURE')) {
      return {
        ...LOADING_INIT_STATE,
        hasError: true,
        err: action.err || 'Unknown error',
      };
    }

    return {
      ...LOADING_INIT_STATE,
      hasError: false,
    };
  }

  return state;
}
