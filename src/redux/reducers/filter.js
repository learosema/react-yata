import { SET_FILTER } from '../actions';

export default function filter(state = '', action) {
  if (action.type === SET_FILTER) {
    return action.value;
  }
  return state;
}
