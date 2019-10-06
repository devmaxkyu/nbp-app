/** 
 * @author Zemin W.
 * @description define actions to add and remove favorite currencies 
 * @lastModified 2019.10.4
 * */

const REMOVE_FAVOURITE = 'FAVOURITE_REMOVE'
const REMOVE_ALL_FAVOURITE = 'FAVOURITE_ALL_REMOVE'
const ADD_FAVOURITE = 'FAVOURITE_ADD'

export const actions = {
    REMOVE_FAVOURITE,
    REMOVE_ALL_FAVOURITE,
    ADD_FAVOURITE,
}

export const addFavourite = data => ({
    type: ADD_FAVOURITE,
    data
})

export const removeFavourite = data => ({
    type: REMOVE_FAVOURITE,
    data
})

export const removeAllFavourite = data =>({
    type: REMOVE_ALL_FAVOURITE,
    data
})