import React, {Component} from 'react';
import CategoryLabel from "../../../components/CategoryLabel";
import "./personal_details.css";
import FirstName from "./FirstName";
import LastName from "./LastName";
import JobTitle from "./JobTitle";
import Email from "./Email";
import Phone from "./Phone";
import Avatar from "./Avatar";
import AddExpander from "./AddExpander";

class PersonalDetails extends Component {
    render() {
        return (
            <div>
                <div className="personal-details-container">
                    <CategoryLabel value={"Personal Details"}/>
                    <div className="personal-details-wrapper">
                        <div className="form-section-one-line">
                            <JobTitle/>
                            <Avatar/>
                        </div>
                        <div className="form-section-one-line">
                            <FirstName/>
                            <LastName/>
                        </div>
                        <div className="form-section-one-line">
                            <Email/>
                            <Phone/>
                        </div>
                        <AddExpander/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PersonalDetails;
