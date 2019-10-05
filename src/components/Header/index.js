/** 
 * @description page component to show currency details
 * @lastModified 2019.10.4
 * @author zemin
 * */

import React from 'react'

import logo from './logo.svg';
import { Link } from 'react-router-dom'

class Header extends React.Component {

    render() {
        return (
            <div class="App-header">
                <div className="App-logo">
                    <Link to="/">
                        <img src={logo} className="App-logo-img" alt="logo" />                   
                    </Link>
                </div>
                <h2>Frontend Practical Assignment</h2>
                <div class="App-header-right">
                    <ul className="App-nav">
                        <li>
                            <Link to="/" className="App-link">
                                Currency List
                            </Link>
                        </li>
                        <li>
                            <Link to="/favourite" className="App-link">
                                Favourite List
                            </Link>
                        </li>
                    </ul>
                    

    `                                                            
                </div>
            </div>          
        )
    }
}

export default Header