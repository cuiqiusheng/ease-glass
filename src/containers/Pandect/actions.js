import * as at from 'Constants/actionTypes'


export function someAction(msg) {
  return {
    msg,
    type: at.SOME_ACTION
  }
}
