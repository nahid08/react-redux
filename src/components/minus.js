import React from 'react';
import { connect } from 'react-redux';
import decrement from '../redux/actions/decrement';


function Minus(props) {
    return (
        <>
        <button onClick={props.decrement}>Minus</button>
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Minus)