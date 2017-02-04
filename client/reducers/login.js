const initialState = {
  loggedIn: false,
  failed: false
}

export default function loginReducer(state=initialState, action) {
  switch (action.type) {
    case 'set facebook success':
      return {
        loggedIn: true,
        failed: false,
        fbObject: action.fbObject
      }
      break;

      case 'set facebook failed':
        return {
          loggedIn: false,
          failed: true,
        }
        break;

    default:
      return initialState
  }

}
