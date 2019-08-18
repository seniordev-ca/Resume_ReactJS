import React, {Component} from "react";
import "./category_label.css";

class CategoryLabel extends Component{
    render() {
        return (
            <div className="category_label">
                {this.props.value}
            </div>
        );
    }
}

export default CategoryLabel;
