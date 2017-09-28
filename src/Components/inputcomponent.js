import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = (props) => (
	<div className="form-group">
        <label>{props.title}</label>
        <div className="input-group">
            <input
                className="form-control"
                name={props.name}
                type={props.inputType}
                value={props.content}
                onChange={props.controlFunc}
                placeholder={props.placeholder}
                />
        </div>
    </div>    
)

InputComponent.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number']).isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    controlFunc: PropTypes.func.isRequired,
	content: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
    ]),
    placeholder: PropTypes.string.isRequired
}

export default InputComponent;