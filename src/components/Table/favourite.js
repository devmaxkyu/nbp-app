/** 
 * @description page component to render table with favourite list data
 * @lastModified 2019.10.6
 * @author zemin
 * */

import React from 'react'
import { Link } from 'react-router-dom'

class FavouriteTable extends React.Component {

    render() {
        const { items } = this.props

        return (
            <table className="App-table">
                <tr>
                    <th>Currency Name</th>
                    <th>Currency Value</th>
                </tr>

                {items && items.length ? items.map((item, index) => {
                        return (
                            <tr id={item.code}>                                    
                                <td><Link to={`currency/${item.table}/${item.code}`} >{item.currency}</Link></td>
                                <td>{item.rates[0].mid}</td>
                            </tr>
                        );
                    })
                    :<tr><td colSpan="2">No Favourite items, yay!</td></tr>
                }
            </table>
                                                      
        )
    }
}

export default FavouriteTable