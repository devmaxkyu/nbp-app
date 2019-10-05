/** 
 * @description page component to show currency details
 * @lastModified 2019.10.4
 * @author zemin
 * */

import React from 'react'

import logo from './logo.svg';

class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <a href="/" class="logo">
                    <img src={logo} className="App-logo" alt="logo" />                   
                </a>
                <div class="header-right">
                    <a class="active" href="/">Currency List</a>
                    <a class="link" href="/favourite">Favourite</a>                    
                </div>
            </div>          
        )
    }
}

export default Header