import React, { Component } from 'react';
import types from "../../utils/commenTypes";
import PropTypes from "prop-types"

export default class CheckBox extends Component {
    static defaultProps = {
        dates: [],
        name: "",
    }

    static propTypes = {
        dates: types.datasGroup,
        chooseDates: PropTypes.arrayOf(PropTypes.string),
        onChange: PropTypes.func
    }
 
    handleClick = (e) => {
       let val = e.target.value;
       let name = e.target.name;
       let newArr;
      if( e.target.checked ) {  // 如果当前checked为false,点击之后就为true，就在chooseDates添加当前的value
          newArr = [...this.props.chooseDates, val];
      } else {
          newArr = this.props.chooseDates.filter( item => {
              return item !== val;
          })
      }

      this.props.onChange && this.props.onChange(newArr)
    }

    // 得到一组多选框
    getCheckbox = () => {
    return this.props.dates.map( item => {
           return <label key={item.value}>
                <input 
                    type="checkbox"
                    name={this.props.name}
                    value={item.value}
                    checked={this.props.chooseDates.includes(item.value)}
                    onChange={this.handleClick}
                />
                {item.text}
            </label>
        })
    }


    render() {
        const bs = this.getCheckbox()
        return (
          <p>
              {bs}
          </p>
        )
    }
}
