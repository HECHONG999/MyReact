import React, { Component } from 'react';
import types from '../../utils/commenTypes'
import PropTypes from "prop-types"

export default class RadioBox extends Component {
    static propTypes = {
        info: types.datasSingle,
        value: PropTypes.string,
        name: PropTypes.string
    }

    handleClick = (e) => {
        let val = e.target.value;
        this.props.onChange && this.props.onChange(val);
    }


    render () {
        return (
            <label >
                <input  
                        type="radio"
                        name={this.props.name}
                        value={this.props.info.value}
                        checked={this.props.value === this.props.info.value}
                        onChange={ this.handleClick }
                        />
                    {this.props.info.text}
            </label>
        )
    }
}

