import { createAction } from 'redux-actions'
import 'whatwg-fetch'


export function facebookOnResponse(response) {
  // succesfull
  if (response.hasOwnProperty('userID')) {

    // send facebook object to our API
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(response)
    })

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
