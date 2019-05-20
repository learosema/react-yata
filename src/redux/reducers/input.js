import { CHANGE_INPUT, CLEAR_INPUT } from '../actions';

export default function input(state = '', action = { type: null }) {
  if (action.type === CHANGE_INPUT) {
    return action.value;
  }
  if (action.type === CLEAR_INPUT) {
    return '';
  }
  return state;
}
