import React, {Component} from "react";
import Router from "../react-router/Router";
import createBrowserHistory from "./history/createBrowserHistory";
/**
 * 提供history 对象给 Router 组件
 */
export default class BrowserRouter extends Component {
    history = createBrowserHistory(this.props);     // 把BrowserRouter 传过来的属性,全部传递给 history
    render () {
        return (
            <Router history={this.history}>
                {this.props.children}
            </Router>
        )
    }
}