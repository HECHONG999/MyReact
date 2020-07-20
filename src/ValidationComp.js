import React, { Component } from 'react'
import PropTypes  from "prop-types"

export class A  {

}
export class B extends A {

}

export default class ValidationComp extends Component {
    // 先默认混和默认赋值
    static defaultProps = {
        a: false
    }

    static propTypes = {
        a: PropTypes.number.isRequired,  // 要求a属性为数字类型,而且必须填值
        b: PropTypes.string,
        c: PropTypes.bool.isRequired,  // 要求c为布尔类型,且为必填
        onClick: PropTypes.func,      // 要求onClick必须为一个函数类型 
        d: PropTypes.object,
        e: PropTypes.array,

        f: PropTypes.node.isRequired,  // 任何可以渲染的字符串、数字、react对象
        g: PropTypes.element,          // 要求为react对象
        h: PropTypes.instanceOf(A), // 要求h为Comp的实例 
        i: PropTypes.elementType,   // 要求i为一个react类型
        j: PropTypes.oneOf(["1","2",3,"name"]),  //枚举: j的数据在[]中有包含
        k: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),  // k属性类型必须是数组中的其中一个
        l: PropTypes.arrayOf( PropTypes.shape({    // l的属性必须满足该对象的要求
            name: PropTypes.string.isRequired,    //name必须是一个字符串，必填
            age: PropTypes.number
        }) ),   // l这个数组中的每一项都必须为number类型
        m: PropTypes.objectOf( PropTypes.string),
        o: PropTypes.shape({    // o属性为一个对象
            name: PropTypes.shape({   // name属性为一个对象
                son: PropTypes.string,   // son属性为一个字符串
                age: PropTypes.number
            })
        }),
        func: function (props,propName, componentName) {
            console.log(props, propName, componentName)
           const result =  props[propName]
            console.log(result)
            // 只能是 0 -- 100 的数字
            if( result < 0 || result > 100) {
                return new Error(`invalid prop ${propName} in ${componentName} must is between 0 and 100`)
            }

            //必填
            if (result === undefined || result === null) {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} is Required`);
            }
            //该属性必须是一个数字
            if (typeof result !== "number") {
                return new Error(`invalid prop ${propName} in ${componentName}，${propName} is not a number`);
            }

            // 不能这样直接调用prop-types
            // const err = PropTypes.number.isRequired(props, propName, componentName);
            // if(err){
            //     return err;
            // }
        }
    }
    render() {
        return (
            <div>
                {this.props.a}
                <h1>{this.props.f}</h1>
                <h1>{this.props.g}</h1>
               
            </div>
        )
    }
}
