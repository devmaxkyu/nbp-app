/** 
 * @author Zemin W.
 * @description combine reducers
 * @lastModified 2019.10.4
 * */

import { combineReducers } from 'redux'

import CurrencyDetailReducer from '../scenes/CurrencyDetail/reducer'
import CurrencyListReducer from '../scenes/CurrencyList/reducer'
import FavouriteReducer from '../scenes/Favourite/reducer'

export default combineReducers({
    CurrencyDetailReducer,
    CurrencyListReducer,
    FavouriteReducer
})
