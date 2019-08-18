import React, {Component} from "react";
import "./expander_button.css";

class ExpanderButton extends Component{
    render() {
        return (
            <div className="expander-button-container">
                <div className="expander-button-wrapper">
                    <div className="expander-button-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon points="13 11 17 11 17 13 13 13 13 17 11 17 11 13 7 13 7 11 11 11 11 7 13 7"></polygon>
                        </svg>
                    </div>
                    <span className="expander-button-text">{this.props.value}</span>
                </div>
            </div>
        );
    }
}

export default ExpanderButton;
