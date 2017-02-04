import { createAction } from 'redux-actions'
import {browserHistory} from 'react-router'
import 'whatwg-fetch'


export function facebookOnResponse(response) {
  // succesfull
  if (response.hasOwnProperty('userID')) {

    // send facebook object to our API
    fetch('http://129.31.231.107:9000/api/turtle_users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: response.email || 'UNKNOWN_MAIL',
        name: response.name || 'UNKNOWN_NAME',
        fbUserId: response.userID,
        gender: response.gender || 'UNKNOWN_GENDER'
      })
    }).then(
    //  (res) => console.log(res)
    )
    browserHistory.push('/stack')
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
