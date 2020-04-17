// import React from 'react'
// import PropTypes from "prop-types"

// export default class NewSelect extends React.Component {

//     static propTypes = {
//         value: PropTypes.string,
//         name: PropTypes.string
//     }

//     handleClick = (e) => {
//         let val = e.target.value;
//         this.props.onChange && this.props.onChange(val, e);
//     }

//     render () {
//         console.log(this.props, "+++++++")
//         return (
//             <select name={this.props.name} value={this.props.value} onChange={this.handleClick}>
//                 [<Comp></Comp>]
//             </select>
//         )
//     }
// }