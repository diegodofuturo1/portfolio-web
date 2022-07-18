import { UserDto } from "../../dtos/user.dto";
import { CURRENT_USER_CHANGE, CURRENT_USER_EXIT } from "../actions/user.action";

export interface UserState {
  currentUser?: UserDto;
}

const initialState: UserState = {};

const reducer = (state: UserState = initialState, action: any): UserState => {
  switch (action.type) {
    case CURRENT_USER_CHANGE:
      return { ...state, currentUser: action.payload };

    case CURRENT_USER_EXIT:
      return { ...state, currentUser: undefined };
    default:
      return state;
  }
};

export default reducer;
