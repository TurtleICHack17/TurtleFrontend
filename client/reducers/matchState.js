const initialState = {
  videoUrl: '',
  otherUserId: ''
}

export default function matchStateReducer(state=initialState, action) {
  switch (action.type) {
    case 'set video url':
      return {
        videoUrl: action.videoUrl,
        ...state
      }
      break;

      case 'set other user id':
        return {
          otherUserId: action.userId,
          ...state
        }
        break;

    default:
      return state
  }

}
