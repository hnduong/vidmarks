import { UIState } from './state';

export const TOGGLE_NAVIGATION = 'TOGGLE_NAVIGATION';
export const SHOW_NAVIGATION = 'SHOW_NAVIGATION';
export const CLOSE_NAVIGATION = 'CLOSE_NAVIGATION';

export default {
  [TOGGLE_NAVIGATION](state: UIState): void {
    state.showNavigation = !state.showNavigation;
  },
  [CLOSE_NAVIGATION](state: UIState): void {
    state.showNavigation = false;
  },
  [SHOW_NAVIGATION](state: UIState): void {
    state.showNavigation = true;
  }
};
