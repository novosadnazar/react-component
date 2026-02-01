import PropTypes from 'prop-types'; // ES6

export const Button = (props) => {
const {text , messange} = props
    return <button>{ text}</button>
}

Button.propTypes = {//propTypes 
    text: PropTypes.string.isRequired,
    
}