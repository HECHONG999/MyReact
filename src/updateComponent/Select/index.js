import React, { Component } from 'react';
import types from "../../utils/commenTypes"
import PropTypes from "prop-types";

import WithBoxGroup from "../hoc/withDatasGroup"

export  class Options extends Component {
    static propTypes = {
        info: types.datasSingle,
        name: PropTypes.string,
        onChange: PropTypes.func
    }


    
    render () {
        console.log(this.props)
        return (
        <option value={this.props.info.value}  name={this.props.name}>{this.props.info.text}</option>
        )
    }
}

let OutOptions = WithBoxGroup(Options)



export default class Select extends Component {

    static propTypes = {
        value: PropTypes.string,
        name: PropTypes.string
    }

   

    handleClick = (e) => {
        let val = e.target.value;
        this.props.onChange && this.props.onChange(val, e);
    }

    render () {
        console.log(this.props, "+++++++")
        return (
            <select name={this.props.name} value={this.props.value} onChange={this.handleClick}>
                [<OutOptions {...this.props} ></OutOptions>]
            </select>
        )
    }
}