import { createAction } from 'redux-actions'

export function facebookOnResponse(response) {
  // succesfull
  if (response.hasOwnProperty('userID')) {

    return {
        type: 'set facebook success',
        fbObject: response
    }
  }
  else {
    return {
        type: 'set facebook failed'
      }
    }
}

//export const facebookOnResponse = createAction('facebook on response')
