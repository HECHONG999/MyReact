import React, { Component } from 'react';
import RadioBox from "./index"

export default class test extends Component {
    state = {
        datas: [
            {value:"football", text:"足球"},
            {value:"basketball", text:"篮球"},
            {value:"movie", text:"电影"},
        ],
        value: "",
        name: "radio"
    }
    render() {
        return (
            <div>
                <RadioBox {...this.state} onChange={ newValue => {
                    this.setState({
                        value: newValue
                    })
                }} />
            </div>
        )
    }
}
