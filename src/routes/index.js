/** 
 * @author Zemin W.
 * @description create routes
 * @lastModified 2019.10.4
 * */


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import React, {Suspense, lazy} from 'react';


const CurrencyDetail = lazy(()=> import('../pages/CurrencyDetail')) 
const CurrencyList = lazy(()=> import('../pages/CurrencyList'))  
const Favourite = lazy(()=>import('../pages/Favourite')) 

const routes = () => (
    <div>
        <Route path="/currency/:table/:code" component={CurrencyDetail}/>
        <Route exact path="/" component={CurrencyList}/>
        <Route path="/favourite" component={Favourite}/>
    </div>   
)


export default routes