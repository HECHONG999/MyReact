import React, { Component } from 'react';
import types from "../../utils/commenTypes";
import PropTypes from "prop-types"

/**
 * ChexkBox这个类就只负责渲染一个多选框
 */
export default class CheckBox extends Component {
    static propTypes = {
        info: PropTypes.object,
        name: PropTypes.string,
        chooseDates: types.chooseDatas
    }

    handleClick = (e) => {
        let val = e.target.value;
        let newArr;
       if( e.target.checked ) {  // 如果当前checked为false,点击之后就为true，就在chooseDates添加当前的value
           newArr = [...this.props.chooseDates, val];
       } else {
           newArr = this.props.chooseDates.filter( item => {
               return item !== val;
           })
       }
       this.props.onChange && this.props.onChange(newArr, e)
     }

    render () {
        return (
            <label>
                <input 
                    type="checkbox"
                    name={this.props.name}
                    value={this.props.info.value}
                    checked={this.props.chooseDates.includes(this.props.info.value)}
                    onChange={this.handleClick}
                />
                {this.props.info.text}
            </label>
        )
    }

}


