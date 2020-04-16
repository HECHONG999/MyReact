import PropTypes from "prop-types";

export default{
    children: PropTypes.node,
    datasGroup: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })),
    chooseDatas: PropTypes.arrayOf(PropTypes.string)
}