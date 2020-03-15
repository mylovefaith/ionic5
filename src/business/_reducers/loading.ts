export const INITIAL_STATE = {
  isLoading: false,
  loadingText: 'Loading...',
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  const { type } = action;
  const isLoading = /(.*)(LOGGING|UPDATING|LOADING)(.*)/.exec(type);
  const hasLoaded = /(.*)_(SUCCESS|FAILURE)/.exec(type);

  if(!isLoading && !hasLoaded) return state;

  if(isLoading) return {
    isLoading: true,
    loadingText: action.payload || state.loadingText,
    error: null,
  }

  if(hasLoaded) {
    if(type.includes('FAILURE')) {
      return {
        ...INITIAL_STATE,
        error: action.payload || {
          err: 'Error',
          message: 'Unknown error'
        }
      }
    }

    return {
      ...INITIAL_STATE,
      error: null,
    }
  }

  return state;
}
