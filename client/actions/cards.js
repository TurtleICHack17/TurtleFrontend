import { createAction } from 'redux-actions'
import {browserHistory} from 'react-router'
import 'whatwg-fetch'


export function appendCards(cards) {
  return {
    type: 'append cards',
    cards
  }
}

//export const facebookOnResponse = createAction('facebook on response')
