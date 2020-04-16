import React, { Component } from 'react';
import types from '../../utils/commenTypes'
import PropTypes from "prop-types"
export default class RadioBox extends Component {
    static defaultProps = {
        datas: [],
        value: ""
    }

    static propTypes = {
        datas: types.datasGroup,
        value: PropTypes.string,
        onChange: PropTypes.func,
        name: PropTypes.string
    }

    handleClick = (e) => {
        let val = e.target.value;
        this.props.onChange && this.props.onChange(val);
    }
    getRadioGoup = () => {
        return this.props.datas.map( item => {
            return <label key={item.value}>
                        <input  
                                type="radio"
                                name={this.props.name}
                                value={item.value}
                                checked={this.props.value === item.value}
                                onChange={this.handleClick}
                                />
                                {item.text}
                    </label>
        })
    }
    render() {
        const bs = this.getRadioGoup()
        return (
            <>
             {bs}   
            </>
        )
    }
}
