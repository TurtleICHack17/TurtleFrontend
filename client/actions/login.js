import { createAction } from 'redux-actions'
import {Router} from 'react-router'
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
    Router.browserHistory.push('/stack')
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
