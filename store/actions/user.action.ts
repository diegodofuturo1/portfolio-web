import { UserDto } from 'dtos/auth/user.dto';
import { UserAction } from 'store/reducers/user.reducer';

export const CURRENT_USER_CHANGE = 'CURRENT_USER_CHANGE';
export const CURRENT_USER_EXIT = 'CURRENT_USER_EXIT';
export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';

export type UserActionType = 'CURRENT_USER_CHANGE' | 'CURRENT_USER_EXIT' | 'OPEN_DRAWER' | 'CLOSE_DRAWER';

export const currentUserExit = () => ({
  type: CURRENT_USER_EXIT,
});

export const currentUserChange = (currentUser: UserDto): UserAction => ({
  type: CURRENT_USER_CHANGE,
  payload: { currentUser },
});

export const openDrawer = () => ({
  type: OPEN_DRAWER,
});

export const closeDrawer = () => ({
  type: CLOSE_DRAWER,
});
