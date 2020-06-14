import React from 'react'
import PropTypes from 'prop-types';
import './button.css'

const Button = (props) => {
    return(
        <div className = 'buttonstyle'>
            <button onClick = {props.onClick} type = {props.type} className = {props.className}> {props.name}</button>
        </div>
    )
}
Button.propTypes = {
    onClick : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
};


export default Button;