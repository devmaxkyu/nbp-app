/** 
 * @description page component to show currency details
 * @lastModified 2019.10.4
 * @author zemin.
 * */

import React from 'react'
import {connect} from 'react-redux'
import {getCurrencyDetail,TABLE_FORMAT} from '../../services/nbpApi'
import PropTypes from 'prop-types'
import {setCurrencyDetail} from './actions'
import {addFavourite, removeFavourite} from '../Favourite/actions'
import { ENGINE_METHOD_NONE } from 'constants'
import {Link} from 'react-router-dom'
import _ from 'lodash'

class CurrencyDetail extends React.Component {
    constructor(props){
        super(props)

        this.state = {loaded:false}
    }

    componentDidMount(){

        // this.state.setState({
        //     detail:null,            
        // })

        const {             
            match:{params:{code, table}}            
        } = this.props
        console.log('CurrencyDetail.componentDidMount', code, table)
        // get details using api function
        getCurrencyDetail(table, code, this.setCurrency)        
    }

    setCurrency = (result) => {
        const {dispatch, currency} = this.props
        dispatch(setCurrencyDetail(result))
        this.setState({loaded: true})
    }

    // handler to add currency to favourite when user click button
    handleAdd = ()=> {
        const {currency, dispatch} = this.props
        dispatch(addFavourite(currency))
    }

    // handler to remove currency from favourite when user click button
    handleRemove = ()=> {
        const {currency, dispatch} = this.props
        dispatch(removeFavourite(currency))
    }

    render() {

        const {currency: detail,favourite: {list: favouriteList}} = this.props
        if(!this.state.loaded){
            return (<p>no detail data</p>)
        }
        // check if currency exists in favourite list
        const isFavourite = _.find(favouriteList, item => item.code === detail.code)
        
        return (
            <div className="App-detail">
                <div>
                    <h4>{detail.currency}</h4>
                    <p><small>{detail.code}</small></p>

                    <div className="attr">
                        <div>
                            <span className="label">Effective Date</span>
                            <span>{detail.rates[0].effectiveDate}</span>                        
                        </div>
                        <div>
                            <span className="label">Number</span>
                            <span>{detail.rates[0].no}</span>                        
                        </div>
                        <div>                        
                            <span className="label">Rate</span>
                            <span>{detail.rates[0].mid}</span>
                        </div>
                    </div>
                    
                    
                </div>
                {isFavourite?(
                    <div>
                        <p>Already in your favourite list</p>
                        <button className="App-btn" onClick={this.handleRemove}> Remove from favourite</button>
                    </div>                    
                ):(
                    <div>
                        <button className="App-btn" onClick={this.handleAdd}> Add to favourite</button>
                    </div>                    
                )}

                <div>
                    <Link to="/" >back to list</Link>
                </div>
            </div>
            
        )
    }
}


// ract router link to get request's params
CurrencyDetail.protoTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            code: PropTypes.string.isRequired,
            table: PropTypes.string.isRequired
        })
    })
}

export default connect(state => ({
    currency: state.currencyDetail.currency,
    favourite: state.favourite
}))(CurrencyDetail)