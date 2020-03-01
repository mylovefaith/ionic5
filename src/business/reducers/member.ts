import { MemberState, MemberActionTypes } from '../actions/members.types'

export const INITIAL_STATE = {
  members: null,
};

export default function(state = INITIAL_STATE, action: MemberActionTypes): MemberState {
  switch (action.type) {
    default:
      return state;
  }
}
