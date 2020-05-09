import React, { Component } from 'react'
import PropTypes from "prop-types"
import "./index.css"
export default class Layout extends Component {
    static propTypes = {
        header: PropTypes.element,
        aside: PropTypes.element,
        children: PropTypes.array
    }
    render() {
        return (
            <div className="container">
                <header className="header">
                    {this.props.header}
                </header>
                <section className="content">
                    <aside className="aside">
                        {this.props.aside}
                    </aside>
                    <div className="main">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}
