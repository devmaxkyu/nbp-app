/** 
 * @description page component to show favourite currencies
 * @lastModified 2019.10.4
 * @author zemin
 * */

import React from 'react'
import { connect } from 'react-redux'
import FavouriteTalbe from  '../../components/Table/favourite'
import {removeAllFavourite} from './actions'

class Favourite extends React.Component {

    handleRemove = () =>{
        const {dispatch} = this.props
        dispatch(removeAllFavourite())
    }

    render() {
        const {favourite} = this.props

        return (
            <div>
                <h2>Favourite List</h2>
                <div>
                        <a className={"App-link"} href="#" onClick={this.handleRemove}>
                            All Remove Favourite                                                        
                        </a>
                </div>
                <FavouriteTalbe items = {favourite.list} />
            </div>
        )
    }
}

export default connect(state => ({
    favourite: state.favourite
}))(Favourite)