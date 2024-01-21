import React from 'react'
import { connect } from 'react-redux/es/exports'
import ResutlSearch from './ResutlSearch/ResutlSearch'
import './SearchInput.css'


function SearchInput(props) {
    const HandleInput = (e) => {
        if (e.key === "Enter") {
            props.GetDataSagaFunc(e.target.value)
        }
    }
    return (
        <div className='box_search'>
            <div className='inp_search'>
                <input placeholder='Search...' onKeyUp={(event) => {
                    HandleInput(event)
                }} />
                <p>Enter to search.</p>
            </div>
            <ResutlSearch />
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    return {
        SearRdc: state.SearRdc

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        GetDataSagaFunc: (key) => {
            console.log(key);
            dispatch({ type: "search", payload: key })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)