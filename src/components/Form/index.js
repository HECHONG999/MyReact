import React, { Component } from 'react';
import {Provider} from "./getContext";
import FormInput from "./FormInput"
import FormButton from "./FormButton"
import propTypes from "prop-types"

export default class Form extends Component {
    state = {
        formData: {},
        onChangeFromData: (name, val) => {
            console.log(name, val,"+++=")
            this.setState({
               formData: {
                    ...this.state.formData,
                    [name]: val
               }
            })
        },
        submit: () => {
            this.props.onSubmit && this.props.onSubmit(this.state.formData); // 传入获取的表单数据
        }
    }

    static propTypes = {
        onSubmit: propTypes.func
    }
    render() {
        return (
            <Provider value={this.state}>
                {/* 直接使用Form组件里的属性children */}
                {this.props.children}
            </Provider>
        )
    }
}


Form.input = FormInput
Form.Button = FormButton