import React, { Component } from 'react';
import PropTypes from "prop-types"

export default class StudentSearchBar extends Component {


    static propTypes = {
        key: PropTypes.string,
        sex: PropTypes.number
    }

    constructor(props) {
        super(props);
        const defaul = {
            key: "",
            sex: -1
        };
        this.state = Object.assign({}, defaul, this.props.defaultValue)
    }

    onClickHandle = () => {
        if(this.props.onSearch) {
            this.props.onSearch(this.state)
        }
    }

    onChangeValue = (e) => {
        this.setState({
            sex: +e.target.value
        })
    }
    render() {
        return (
            <div>
                关键字: 
                <input type="texxt" value={this.state.key} onChange={ (e) => {
                    this.setState({
                        key: e.target.value
                    })
                }} />
                <label>不限:<input checked={this.state.sex === -1} type="radio" name="sex" onChange={this.onChangeValue}/></label>
                <label>男:<input checked={this.state.sex === 0} type="radio" name="sex"  onChange={this.onChangeValue}/></label>
                <label>女:<input checked={this.state.sex === 1} type="radio" name="sex" onChange={this.onChangeValue}/></label>
                <button onClick={ this.onClickHandle }>查询</button>
            </div>
        )
    }
}
