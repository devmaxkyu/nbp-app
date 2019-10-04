/** 
 * @author Zemin W.
 * @description define reducers to refresh and filter currencies list
 * @lastModified 2019.10.4
 * */
import {createReducer} from 'redux-create-reducer'
import {actions} from './actions'

 const initialState = {
     list: [],
 }

 const reducer = createReducer(initialState, {
     [actions.REFRESH_LIST] (state, action){
         return { 
             ...state,
             list: action.data
         }
     },

     [actions.FILTER_LIST] (state, action){
        return { 
            ...state,
            filter: action.data
        }
    },
 })

 export default reducer
