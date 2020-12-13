import { UIState } from './state';

export const GET_SHOW_NAVIGATION = 'GET_SHOW_NAVIGATION';

export default {
  [GET_SHOW_NAVIGATION](state: UIState): boolean {
    return state.showNavigation;
  }
};
