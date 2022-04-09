import React, { Component } from 'react';
import ctx from "./RouterContext";
import matchPath from './matchPath';


export default class Switch extends Component {
    /**
     * 循环children， 匹配一个 Route组件返回，若没有匹配，则返回null
     * @param {*} param0 
     */
    getMatchChild = ({location}) => {
        let {children} = this.props;
        let resultChildren = []
        if(Array.isArray(children)) {
            resultChildren = children;
        }
        if(typeof children === 'object') {
            resultChildren = [children]
        }
        for(let child of children) {
            console.log("child====", child);
            let {path = '/', exact = false, sensitive = false, strict = false} = child.props;
            const result = matchPath(path, location.pathname, {exact, strict, sensitive});
            if(result) {
                return child;
            }
        }
        return null;
    }
  render() {
    return <ctx.Consumer>
        {this.getMatchChild}
    </ctx.Consumer>
  }
}
