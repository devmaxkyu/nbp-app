/** 
 * @description page component to render table with data
 * @lastModified 2019.10.5
 * @author zemin
 * */

import React from 'react'


class Table extends React.Component {

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
                                <td>{item.currency}</td>
                                <td>{item.value}</td>
                            </tr>
                        );
                    })
                    :<tr><td colSpan="2">No items, yay!</td></tr>
                }
            </table>
                                                      
        )
    }
}

export default Table