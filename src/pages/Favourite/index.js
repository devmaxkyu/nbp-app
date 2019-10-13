/** 
 * @description page component to show favourite currencies
 * @lastModified 2019.10.4
 * @author zemin
 * */

import React from 'react'
import { connect } from 'react-redux'
import FavouriteTalbe from  '../../components/Table/favourite'
import {removeAllFavourite} from './actions'
import ErrorBoundary from '../../components/Error'

class Favourite extends React.Component {

    handleRemove = () =>{
        const {dispatch} = this.props
        dispatch(removeAllFavourite())
    }

    render() {
        const {favourite} = this.props

        return (
            <div>
                <h3>Favourite List</h3>
                <div className="App-btn-group">
                        <a className={"App-link"} href="#" onClick={this.handleRemove}>
                            All Remove Favourite                                                        
                        </a>
                </div>
                <div className="table-wrap">
                    <ErrorBoundary>
                            <FavouriteTalbe items = {favourite.list} />
                    </ErrorBoundary>                
                </div>
                
            </div>
        )
    }
}

export default connect(state => ({
    favourite: state.favourite
}))(Favourite)