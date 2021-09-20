import React from "react";
import {connect} from 'react-redux'
import increment from '../redux/actions/increment'

function Plus(props) {
    return (
        <>
        <h2>{props.num}</h2>
        <button onClick={props.increment}>Plus</button>
        </>
    )
}


const mapStateToProps = (state) => ({
    num: state.increment,
})

const mapDispatchToProps = {
    increment,
}

export default connect(mapStateToProps, mapDispatchToProps )(Plus)