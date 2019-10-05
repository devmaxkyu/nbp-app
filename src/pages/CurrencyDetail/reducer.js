/** 
 * @author Zemin W.
 * @description define reducers to add details of currency
 * @lastModified 2019.10.4
 * */

import { createReducer } from 'redux-create-reducer'
import { actions } from './actions'

const initialState = {}

const reducer = createReducer(initialState, {
    [actions.SET] (state, action){
        return {
            ...state,
            currency: action.data
        }
    }
})

export default reducer
