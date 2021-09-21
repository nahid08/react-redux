import React from "react";
import { connect } from "react-redux";
import power from "../redux/actions/power";

function Power(props) {
    return (
        <>
        <h2>{props.num}</h2>
        <button onClick={props.power}>Power</button>
        </>
    )
}

const mapStateToProps = (state) => ({
    num: state.power
})

const mapDispatchToProps = {
    power,
}

export default connect(mapStateToProps,mapDispatchToProps)(Power)