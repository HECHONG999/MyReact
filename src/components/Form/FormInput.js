import React, { Component } from 'react';
import ctx from "./getContext";
import propTypes from "prop-types";

export default class FormInput extends Component {
    // 引入上下文的数据
    static contextType = ctx;
    // 定义默认属性的值
    static defaultProps = {
        type: "text"
    }
    state = {
        name: 'dada'
    }

    // 属性类型检验
    static propTypes = {
        type: propTypes.string.isRequired,
        name: propTypes.string.isRequired
    }
    render() {
        console.log(this.context)
        return (
            <input 
                value={this.context.formData[this.props.name] || ""}
                onChange={ (e) => {
                    this.context.onChangeFromData && this.context.onChangeFromData(this.props.name, e.target.value)
                }}
                type={this.props.type}
            />
            
        )
    }
}
