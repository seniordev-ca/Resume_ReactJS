import React, {Component} from 'react';
import "./label.css"

class Label extends Component{
    render() {
        return (
            <label className="form-label">
                {this.props.value}
            </label>
        );
    }
}

export default Label;