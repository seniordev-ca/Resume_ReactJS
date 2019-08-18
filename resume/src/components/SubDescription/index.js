import React, {Component} from "react";
import "./sub_description.css";

class SubDescription extends Component{
    render() {
        return (
            <label className="sub-description-label">{this.props.value}</label>
        );
    }
}

export default SubDescription;
