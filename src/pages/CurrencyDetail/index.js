/** 
 * @description page component to show currency details
 * @lastModified 2019.10.4
 * @author zemin.
 * */

import React from 'react'

class CurrencyDetail extends React.Component {
    render() {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

export default CurrencyDetail