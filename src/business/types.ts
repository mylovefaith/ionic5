import { InitActionTypes } from "./global/init/types";
import { RouterActionTypes } from "./global/router/types";
import { AuthActionTypes } from "./global/auth/types";
import { LoadingActionType } from "./global/loading/types";
import { GroupActionTypes } from "./screens/group/types";

export type AnyActionType = InitActionTypes | RouterActionTypes | AuthActionTypes | GroupActionTypes | LoadingActionType; 
