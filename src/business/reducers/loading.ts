export const INITIAL_STATE = {
  isLoading: false,
  error: null,
};

export default function(state = INITIAL_STATE, action) {
  const { type } = action;
  const isLoading = type.indexOf('LOADING') >= 0;
  const hasLoaded = /(.*)_(SUCCESS|FAILURE)/.exec(type);

  if(!isLoading && !hasLoaded) return state;

  if(isLoading) return {
    isLoading: true,
    error: null,
  }

  if(hasLoaded) return {
    isLoading: false,
    error: action.error || null,
  }

  return state;
}
