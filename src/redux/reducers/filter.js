import { SET_FILTER } from '../actions';

export default function filter(state = '', action= { type: null }) {
  if (action.type === SET_FILTER) {
    return action.value;
  }
  return state;
}
