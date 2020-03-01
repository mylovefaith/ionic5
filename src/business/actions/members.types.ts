import { Member, Members } from '../models';

export const GET_MEMBERS = 'GET_MEMBERS';
export const GET_MEMBER = 'GET_MEMBER';

export interface MemberState {
  members: Members
}

interface getMemberAction {
  type: typeof GET_MEMBER
  payload: Member
}

interface getMembersAction {
  type: typeof GET_MEMBERS
  payload: Members
}


export type MemberActionTypes = getMembersAction | getMemberAction
