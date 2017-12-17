import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import pandect from 'Containers/Pandect/reducer'
import product from 'Containers/Product/reducer'
import purchase from 'Containers/Purchase/reducer'
import sell from 'Containers/Sell/reducer'
import stock from 'Containers/Stock/reducer'
import client from 'Containers/Client/reducer'
import organize from 'Containers/Organize/reducer'
import setting from 'Containers/Setting/reducer'

const createReducer = (asyncReducers) => {
  return combineReducers({
    pandect,
    product,
    purchase,
    sell,
    stock,
    client,
    organize,
    setting,
    routing: routerReducer,
    ...asyncReducers
  })
}

export default createReducer
