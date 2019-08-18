import React, {Component} from "react";
import CategoryLabel from "../../../components/CategoryLabel";
import SubDescription from "../../../components/SubDescription";
import ExpanderButton from "../../../components/ExpanderButton";

class Education extends Component {

    render() {
        return (
            <div>
                <div className="summary-container">
                    <CategoryLabel value={"Education"}/>
                    <SubDescription value={"If relevant, include your most recent educational achievements and the dates here"}/>
                    <ExpanderButton value={"Add education"}/>
                </div>
            </div>
        );
    }
}

export default Education;
