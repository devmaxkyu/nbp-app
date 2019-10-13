import React, {Suspense, lazy} from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import store from './store'

import './App.css';

// loading Components 
import Header from './components/Header'
import Loader from './components/Loader'
const CurrencyDetail = lazy(()=> import('./pages/CurrencyDetail')) 
const CurrencyList = lazy(()=> import('./pages/CurrencyList'))  
const Favourite = lazy(()=>import('./pages/Favourite')) 

function App() {
  return (
    <Provider store = {store}>
        <Router>
            <Suspense fallback={<Loader/>}>
                <Switch>
                    <div align = "center">
                        
                        <div className="App">                           
                            <Header/>
                            {/* setting routes */}
                            <Route exact path="/" component={CurrencyList} key="CurrencyList"/>
                            <Route path="/currency/:table/:code" component={CurrencyDetail} key="CurrencyDetail"/>                        
                            <Route path="/favourite" component={Favourite} key="Favourite"/>
                        </div>
                    </div>
                    
                </Switch>
            </Suspense>
        </Router>
    </Provider>    
  );
}


export default App;
