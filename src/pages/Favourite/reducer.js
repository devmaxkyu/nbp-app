/** 
 * @author Zemin W.
 * @description define reducers to refresh and filter currencies list
 * @lastModified 2019.10.4
 * */
import {createReducer} from 'redux-create-reducer'
import {actions} from './actions'

const initialState={
    list:[]
}

const reducer = createReducer(initialState, {
    [actions.ADD_FAVOURITE] (state, action){
        const list = state.list
        list.push(action.data)
        return { 
            list
        }
    },

    [actions.REMOVE_FAVOURITE] (state, action){
        const {code} = action.data
        const list = state.list.filter(item=> item.code !== code)
        return { 
            list
        }
    },

    [actions.REMOVE_ALL_FAVOURITE] (state, action){
        return { list:[]}
    }
   
})

export default reducer
