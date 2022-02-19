import React ,{Component} from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import matchPath from './react-router/matchPath';

function PageA() {
    return (
        <h1>PageA</h1>
    )
}

function PageB() {
    return (
        <h1>PageB</h1>
    )
}

/**
 * 路由守备
 */
export default function App() {
    return (

        <Router>
            <nav>
                <Link to="/pageA">PageA</Link>
                <Link to="/pageB">PageB</Link>

            </nav>
            <div>
                <Route path="/pageA" component={PageA} />
                <Route path="/pageB" component={PageB} />
            </div>
        </Router>
    )
}
