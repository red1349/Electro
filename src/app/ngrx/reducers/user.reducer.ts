import { User } from 'src/app/common/models/User.model';

export interface UserState {
  loggedIn: boolean;
  user: User;
}

export const initialUserState: UserState = {
  loggedIn: false,
  user: null
};

export function userReducer(state: UserState = initialUserState, action): UserState {
  return state;
}
