/** 
 * @author Zemin W.
 * @description define actions to set details of currency into store
 * @lastModified 2019.10.4
 * */

const SET = 'CURRENCY_SET';

export const actions = {
    SET
}

export const setCurrencyDetail = data =>({
    type: SET,
    data
})