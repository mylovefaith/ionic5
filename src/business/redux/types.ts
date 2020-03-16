import { InitActionTypes } from './init/types';
import { RouterActionTypes } from './router/types';
import { AuthActionTypes } from './auth/types';
import { LoadingActionTypes } from './loading/types';
import { UserActionTypes } from './user/types';
import { GroupActionTypes } from './group/types';
import { StoreActionTypes } from './store/types';

export type AnyActionType =
  | InitActionTypes
  | RouterActionTypes
  | AuthActionTypes
  | UserActionTypes
  | StoreActionTypes
  | GroupActionTypes
  | LoadingActionTypes;
