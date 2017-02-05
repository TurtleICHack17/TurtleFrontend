const initialState = []

export default function loginReducer(state=initialState, action) {
  switch (action.type) {
    case 'append cards':
      return [...action.cards, ...state]
      break;

    case 'set swiped':
      return state.map(card => {
        if (card.fbUserId == action.UserId) {
          card.swiped = true
          return card
        }
        return card
      })
    break;

    default:
      return state
  }


}
