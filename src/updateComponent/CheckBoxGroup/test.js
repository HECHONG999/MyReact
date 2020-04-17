import React, { Component } from 'react'
import CheckBox from "./index"

export default class test extends Component {
    state = {
        dates: [
            {value:"football", text:"足球"},
            {value:"basketball", text:"篮球"},
            {value:"movie", text:"电影"}
        ],
        chooseDates: [],
        name: "checkbox"
        
    }

    render() {
        return (
            <>
                <CheckBox {...this.state} onChange={ newArr => {
                    this.setState({
                        chooseDates: newArr
                    })
                }}/>
            </>
        )
    }
}
