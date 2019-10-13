/** 
 * @description page component to render table with currency list data
 * @lastModified 2019.10.5
 * @author zemin
 * */

import React from 'react'

import { Link } from 'react-router-dom'

class Table extends React.Component {


    render() {

        const { items, table } = this.props

        return (
            <table className="App-table">
                <thead>
                    <tr>
                        <th>Currency Name</th>
                        <th>Currency Value</th>
                    </tr>
                </thead>
                
                <tbody>
                    {items && items.length ? items.map((item, index) => {
                            return (
                                <tr id={item.code} key={item.code}>                                    
                                    <td>
                                    
                                            <Link to={`currency/${table}/${item.code}`} >{item.currency}</Link>
                                   
                                        
                                    </td>
                                    <td>{item.mid}</td>
                                </tr>
                            );
                        })
                        :<tr><td colSpan="2">No items, yay!</td></tr>
                    }
                </tbody>


            </table>
                                                      
        )
    }
}

export default Table