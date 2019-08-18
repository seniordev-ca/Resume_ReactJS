import React, {Component} from "react";
import CategoryLabel from "../../../components/CategoryLabel";
import SubDescription from "../../../components/SubDescription";
import ExpanderButton from "../../../components/ExpanderButton";

class EmployeementHistory extends Component {

    render() {
        return (
            <div>
                <div className="summary-container">
                    <CategoryLabel value={"Employment History"}/>
                    <SubDescription value={"Include your last 10 years of relevant experience and dates in this section. List your most recent position first."}/>
                    <ExpanderButton value={"Add employment"}/>
                </div>
            </div>
        );
    }
}

export default EmployeementHistory;
