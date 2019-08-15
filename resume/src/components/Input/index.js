import React, {Component} from 'react';
import "./input.css";

class Input extends Component {
    render() {
        return (
            <div className="form-input-wrapper">
                <input className="form-input"/>
                <div className="form-input-underline-hide"></div>
            </div>
        );
    }
}

export default Input;