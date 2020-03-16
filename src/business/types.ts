import { InitActionTypes } from './global/init/types';
import { RouterActionTypes } from './global/router/types';
import { AuthActionTypes } from './global/auth/types';
import { LoadingActionTypes } from './global/loading/types';
import { UserActionTypes } from './global/user/types';
import { GroupActionTypes } from './screens/group/types';

export type AnyActionType =
  | InitActionTypes
  | RouterActionTypes
  | AuthActionTypes
  | UserActionTypes
  | GroupActionTypes
  | LoadingActionTypes;
