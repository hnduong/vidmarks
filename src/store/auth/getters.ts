import { AuthState } from './state';

export const GET_USER = 'GET_USER';
export const GET_USER_AUTHENTICATED = 'GET_USER_AUTHENTICATED';

export default {
  [GET_USER](state) {
    return state.user;
  },
  [GET_USER_AUTHENTICATED](state: AuthState): boolean {
    return state.user?.authenticated;
  }
};
