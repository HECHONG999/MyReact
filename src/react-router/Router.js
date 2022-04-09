import React, {Component} from "react";
import PropTypes from 'prop-types'
import ctx from "./RouterContext";
import matchPath from "./matchPath";

/**
 * Router 组件,作用: 提供一个上下文对象
 * 组织 history对象，location对象、 match对象统一赋值给上下文
 */
export default class Router extends Component {
    static propTypes = {
        history: PropTypes.object.isRequired,
        children: PropTypes.node
    }
    state = {
        location: this.props.history.location,  //第一次默认初始值为 history的location
    }
    componentDidMount() {
        const _this = this;
        // 开启监听，每当地址变化后，触发监听，拿到新的 location 和 action
        this.unlisten = this.props.history.listen((location, action) => {   
            _this.props.history.action = action;
            _this.setState({
                location: location
            })
        })
    }
    componentWillUnmount() {
        this.unlisten();    // 取消监听
    }

    render() {
        let {location} = this.state;
        const ctxValue = {
            history: this.props.history,
            location: location,  // location 从state中取，避免location失去响应式
            match: matchPath('/', location.pathname)
        }
       
        return (
            <ctx.Provider value={ctxValue}>
                {
                    this.props.children
                }
            </ctx.Provider>    
        )
    }
}