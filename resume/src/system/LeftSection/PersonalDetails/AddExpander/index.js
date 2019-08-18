import React, {Component} from "react";
import "./add_expander.css";

class AddExpander extends Component{

    render() {
        return (
            <div className="add-expander">
                <span className="add-expander-text">Edit additional details</span>
                <svg className="sc-cpHetk dkddMn" width="24" height="24" viewBox="0 0 24 24" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.431 7.257l1.352-1.474 5.893 5.48a1 1 0 0 1 0 1.474l-5.893 5.45-1.352-1.475L14.521 12 9.43 7.257z"></path>
                </svg>
            </div>
        );
    }
}

export default AddExpander;
