import React, {Component} from "react";
import CategoryLabel from "../../../components/CategoryLabel";
import SubDescription from "../../../components/SubDescription";
import ExpanderButton from "../../../components/ExpanderButton";

class Skills extends Component {

    render() {
        return (
            <div>
                <div className="summary-container">
                    <CategoryLabel value={"Skills"}/>
                    <SubDescription value={"Don't show experience level"}/>
                    <ExpanderButton value={"Add skill"}/>
                </div>
            </div>
        );
    }
}

export default Skills;
