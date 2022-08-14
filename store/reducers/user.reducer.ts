import { setCookie, deleteCookie } from 'cookies-next';
import { UserDto } from 'dtos/auth/user.dto';
import { CLOSE_DRAWER, CURRENT_USER_CHANGE, CURRENT_USER_EXIT, OPEN_DRAWER, UserActionType } from 'store/actions/user.action';

export interface UserState {
  currentUser?: UserDto;
  drawer: boolean;
}

export interface UserAction {
  payload: Partial<UserState>;
  type: UserActionType;
}

const initialState: UserState = { drawer: false };

const reducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case CURRENT_USER_CHANGE:
      setCookie(`token`, action.payload.currentUser?.token);
      return { ...state, currentUser: action.payload.currentUser };

    case CURRENT_USER_EXIT:
      deleteCookie(`token`);
      return { ...state, currentUser: undefined };

    case OPEN_DRAWER:
      return { ...state, drawer: true };

    case CLOSE_DRAWER:
      return { ...state, drawer: false };

    default:
      return state;
  }
};

export default reducer;
