/** 
 * @author Zemin W.
 * @description combine reducers
 * @lastModified 2019.10.4
 * */

import { combineReducers } from 'redux'

import CurrencyDetailReducer from '../pages/CurrencyDetail/reducer'
import CurrencyListReducer from '../pages/CurrencyList/reducer'
import FavouriteReducer from '../pages/Favourite/reducer'

export default combineReducers({
    CurrencyDetailReducer,
    CurrencyListReducer,
    FavouriteReducer
})
