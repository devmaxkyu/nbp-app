/** 
 * @description page component to show currencies list
 * @lastModified 2019.10.4
 * @author zemin.
 * */

import React from 'react'
import { connect } from 'react-redux'
import {refresh, table} from './actions'
import {getCurrencyList, TABLE_FORMAT} from '../../services/nbpApi'
import Table from '../../components/Table/currency'
import ErrorBoundary from '../../components/Error'


class CurrencyList extends React.Component {
    constructor(props){
        super(props)        
    }

    componentDidMount(){
        if(!this.props.currencies.length){                        
            getCurrencyList(this.props.table, this.setCurrencies)            
        }
    }

    setCurrencies = (result) => {
        const {dispatch} = this.props
        //console.log('CurrencyList.index.setCurrencies',result);
        
        dispatch(refresh(result[0].rates))        
    }

    
    handleTableA = () => {
        const {dispatch} = this.props
        dispatch(table(TABLE_FORMAT.A))        
        getCurrencyList(TABLE_FORMAT.A, this.setCurrencies)        
    }

    handleTableB = () => {
        const {dispatch} = this.props
        dispatch(table(TABLE_FORMAT.B))
        getCurrencyList(TABLE_FORMAT.B, this.setCurrencies)
    }

    handleTableC = () => {
        const {dispatch} = this.props
        dispatch(table(TABLE_FORMAT.C))
        getCurrencyList(TABLE_FORMAT.C, this.setCurrencies)
    }
    render() {
        
        return (
            <div>
                <h3>Currency List</h3>
                <div className="btn-group">
                    
                        <button className={"App-link "+(this.props.table==TABLE_FORMAT.A?"active":"")} name="table_A" onClick={this.handleTableA}>
                            Table {TABLE_FORMAT.A}                                                        
                        </button>
                        <button className={"App-link "+(this.props.table==TABLE_FORMAT.B?"active":"")} name="table_B" onClick={this.handleTableB}>
                            Table {TABLE_FORMAT.B}                                                        
                        </button>
                        {/* <button className={this.state.table==TABLE_FORMAT.C?"":"App-btn App-btn-active"} name="table_C" onClick={this.handleTableC}>
                            Table {TABLE_FORMAT.C}                                                        
                        </button> */}
                    
                </div>                
                <div className="table-wrap">
                    <ErrorBoundary>
                        <Table items = {this.props.currencies} table = {this.props.table} />
                    </ErrorBoundary>
                </div>
                
            </div>
        )
    }
}


export default connect(state => ({
    currencies: state.currencyList.list,
    table: state.currencyList.table
}))(CurrencyList)