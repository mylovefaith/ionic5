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
    return {
      ...INITIAL_STATE,
      error: action.err || null,
    }
  }

  return state;
}
