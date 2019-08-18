import React, {Component} from "react";
import CategoryLabel from "../../../components/CategoryLabel";
import SubDescription from "../../../components/SubDescription";
import ExpanderButton from "../../../components/ExpanderButton";

class Websites extends Component {

    render() {
        return (
            <div>
                <div className="summary-container">
                    <CategoryLabel value={"Websites & Social Links"}/>
                    <SubDescription value={"You can add links to websites you want hiring managers to see! Perhaps It will be  a link to your portfolio, LinkedIn profile, or personal website"}/>
                    <ExpanderButton value={"Add link"}/>
                </div>
            </div>
        );
    }
}

export default Websites;
