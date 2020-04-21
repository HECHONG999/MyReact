import React, { Component } from 'react'
import propTypes from "prop-types";
import "./index.css"

export default class SwitchSpot extends Component {
    static propTypes = {
        total: propTypes.number.isRequired,
        curIndex: propTypes.number.isRequired,
        onChange: propTypes.func.isRequired
    }
    render() {
        let spans = [];
        console.log( this.props.curIndex)
        for(let i = 0; i < this.props.total; i ++) {
            spans.push(
            <span key={i}
            className={i === this.props.curIndex ? "item active": "item"}
            onClick={() => {
                this.props.onChange && this.props.onChange(i);
            }} 
            >
                
            </span>)
        }
        return (
            <div className="spot"> 
                {spans}
            </div>
        )
    }
}
