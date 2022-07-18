import { UserDto } from "../../dtos/user.dto";

export const CURRENT_USER_CHANGE = "CURRENT_USER_CHANGE";
export const CURRENT_USER_EXIT = "CURRENT_USER_EXIT";

export const currentUserExit = () => ({
  type: CURRENT_USER_EXIT,
});

export const currentUserChange = (currentUser: UserDto) => ({
  type: CURRENT_USER_CHANGE,
  payload: currentUser,
});
