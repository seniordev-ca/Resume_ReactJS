import React, {Component} from "react";
import "./add_section_button.css";

class AddSectionButton extends Component{
    render() {
        return (
            <div className={this.props.type}>
                {this.props.text}
            </div>
        );
    }
}

export default AddSectionButton;
