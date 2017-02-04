const initialState = []

export default function loginReducer(state=initialState, action) {
  switch (action.type) {
    case 'append cards':
      return [...action.cards, ...state]
      break;

    default:
      return state
  }

}
