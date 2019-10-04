/** 
 * @author Zemin W.
 * @description define NBP api functions
 * @lastModified 2019.10.4
 * */

const apiBaseUrl = 'http://api.nbp.pl/api/exchangerates/'

const ajaxRequest = (url, callback, method = 'get') =>{
    fetch(url).then(res => res.json())
    .then(
        (result) => {
            callback(result)
        },
        // handle errors
        (error) => {
            console.error('services.nbpApi.ajaxRequest', error)
            alert(error)
        }
    )
}

export const TABLE_FORMAT = {A:'A',B:'B',C:'C'}

export  const getCurrencyList = (table_format,callback) =>{
    const apiUrl = apiBaseUrl + `tables/${table_format}/`
    ajaxRequest(apiUrl, callback, 'get')
}

export const getCurrencyDetail = (table_format, code, callback) => {
    const apiUrl = apiBaseUrl + `rates/${table_format}/${code}`
    ajaxRequest(apiUrl, callback, 'get')
}



