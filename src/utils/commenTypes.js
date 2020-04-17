import PropTypes from "prop-types";


// 定义属性的类型校验
export default{
    children: PropTypes.node,
    datasGroup: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    chooseDatas: PropTypes.arrayOf(PropTypes.string),
    datasSingle: PropTypes.shape({   // 当前这个属性为对象类型, 对象里面的value和text为string类型 
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })
}