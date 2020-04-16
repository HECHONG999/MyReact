import React, { Component } from 'react'
import ValidationComp,{A} from "./ValidationComp"
import Comp from "./Comp"

export default class TestValidation extends Component {
    state = {
        a: 1,
        b: "string",
        c: true,
        onClick: function () {

        },
        d: {name: "何冲"},
        e: [1,2,3],
        f: (<span>我是何冲 ~ 帅</span>),
        g: (<span> React 对象</span>),
        h: new A(), // A为一个类实例
        i: Comp,   // Comp 为一个React类型
        j: "name",
        k: "123",
        l: [{name: "hehcong", age: 18}],
        m: {
            name: "string"
        },
        o: {
            name: {
                son: "何小帅",
                age: 16
            }
        },
        func: 100
        
    }
    render() {
        return (
            <div>
                <ValidationComp {...this.state}/>
            </div>
        )
    }
}
