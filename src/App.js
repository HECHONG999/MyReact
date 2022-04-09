import React ,{Component} from 'react'
// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {BrowserRouter as Router, Route,Switch, WithRouter, Link} from "./react-router-dom";

function Comp(props) {
    return <div>
        {props.text}
        <button onClick={() => {
            props.history.push("/pageB")
        }}>跳转到page2</button>
    </div>
}

const WithRouterPageA = WithRouter(Comp);
function PageA() {
    return (
        <h1>PageA
            <WithRouterPageA text='122222'></WithRouterPageA>
        </h1>
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
            {/* hechong  */}
            <nav>
                {/* <Link to={{pathname:'/pageA'}}>PageA</Link> */}
                <Link to="/pageB">PageB</Link>

            </nav>
            <div>
                <Switch>
                <Route path="/pageA" component={PageA} ></Route>
                <Route path="/pageB" component={PageB} />
                </Switch>
               
            </div>
        </Router>
    )
}
