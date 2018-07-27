export default function name(state = {}, action) {
  switch (action.type) {
    case 'UPDATE_NAME':
      return { name: action.result };
    default:
      return state;
  }
}
