import { UserState, UserActionTypes } from '../actions/user.types'

export const INITIAL_STATE = {
  user: null
};

export default function(state = INITIAL_STATE, action: UserActionTypes): UserState {
  switch (action.type) {
    default:
      return state;
  }
}
