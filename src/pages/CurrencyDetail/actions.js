/** 
 * @author Zemin W.
 * @description define actions to add a currency to currencies list 
 * @lastModified 2019.10.4
 * */

const ADD = 'CURRENCY_ADD';

export const actions = {
    ADD
}

export const add = data =>({
    type: ADD,
    data
})