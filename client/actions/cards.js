import { createAction } from 'redux-actions'
import {browserHistory} from 'react-router'
import 'whatwg-fetch'


export function appendCards(cards) {
  return {
    type: 'append cards',
    cards
  }
}

export function setSwiped(userId) {
  return {
    type: 'set swiped',
    userId
  }
}


export function setVideoUrl(videoUrl) {
  return {
    type: 'set video url',
    videoUrl
  }
}


export function setOtherUserId(userId) {
  return {
    type: 'set other user id',
    userId
  }
}

//export const facebookOnResponse = createAction('facebook on response')
