import * as at from 'Constants/actionTypes'

const initialState = {
  testPurchase: {}
}

export default function someReducer(state = initialState, action) {
  switch (action.type) {
    case at.SOME_ACTION:
      return state
    default:
      return state
  }
}
