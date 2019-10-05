/** 
 * @description page component to show currencies list
 * @lastModified 2019.10.4
 * @author zemin.
 * */

import React from 'react'
import { connect } from 'react-redux'
import {refresh} from './actions'
import {getCurrencyList, TABLE_FORMAT} from '../../services/nbpApi'
import Table from '../../components/Table/currency'

class CurrencyList extends React.Component {
    constructor(props){
        super(props)
        this.state = {table: TABLE_FORMAT.A}
    }

    componentDidMount(){
        if(!this.props.currencies.length){
            
            getCurrencyList(TABLE_FORMAT.A, this.setCurrencies)
            this.setState({table:TABLE_FORMAT.A})
        }
    }

    setCurrencies = (result) => {
        const {dispatch} = this.props
        console.log('CurrencyList.index.setCurrencies',result);
        
        dispatch(refresh(result[0].rates))        
    }

    handleTableA = () => {
        getCurrencyList(TABLE_FORMAT.A, this.setCurrencies)
        this.setState({table:TABLE_FORMAT.A})
    }

    handleTableB = () => {
        getCurrencyList(TABLE_FORMAT.B, this.setCurrencies)
        this.setState({table:TABLE_FORMAT.B})
    }

    handleTableC = () => {
        getCurrencyList(TABLE_FORMAT.C, this.setCurrencies)
        this.setState({table:TABLE_FORMAT.C})
    }
    render() {
        
        return (
            <div>
                <h3>Currency List</h3>
                <div className="btn-group">
                    
                        <button className={"App-link "+(this.state.table==TABLE_FORMAT.A?"active":"")} name="table_A" onClick={this.handleTableA}>
                            Table {TABLE_FORMAT.A}                                                        
                        </button>
                        <button className={"App-link "+(this.state.table==TABLE_FORMAT.B?"active":"")} name="table_B" onClick={this.handleTableB}>
                            Table {TABLE_FORMAT.B}                                                        
                        </button>
                        {/* <button className={this.state.table==TABLE_FORMAT.C?"":"App-btn App-btn-active"} name="table_C" onClick={this.handleTableC}>
                            Table {TABLE_FORMAT.C}                                                        
                        </button> */}
                    
                </div>                
                <div className="table-wrap">
                    <Table items = {this.props.currencies} table = {this.state.table} />
                </div>
                
            </div>
        )
    }
}


export default connect(state => ({
    currencies: state.currencyList.list
}))(CurrencyList)