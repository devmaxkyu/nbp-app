/** 
 * @author Zemin W.
 * @description create routes
 * @lastModified 2019.10.4
 * */

import CurrencyDetail from '../pages/CurrencyDetail'
import CurrencyList from '../pages/CurrencyList'
import Favourite from '../pages/Favourite'

const routes = [
    {
        name: 'Currency Detail',
        path: 'curreny-detail/:table/:currency',
        component: CurrencyDetail,
        hidden: true
    },
    {
        name: 'Currency List',
        path: 'curreny-list',
        component: CurrencyList,
        hidden: true
    },
    {
        name: 'Favourite',
        path: 'favourite',
        component: Favourite,
        hidden: true
    }
]

export default routes