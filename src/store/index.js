/** 
 * @author Zemin W.
 * @description create store object
 * @lastModified 2019.10.4
 * */

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(createLogger()))

export default store
