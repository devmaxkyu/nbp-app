/** 
 * @author Zemin W.
 * @description define actions to refresh currencies list from nbp-api
 * @lastModified 2019.10.4
 * */

const REFRESH_LIST = 'LIST_UPDATE'

const FILTER_LIST = 'SET_FILTER'

export const actions = {
    REFRESH_LIST,
    FILTER_LIST
}

export const refresh = data =>({
    type: REFRESH_LIST,
    data
})

export const filter = data =>({
    type: FILTER_LIST,
    data
})