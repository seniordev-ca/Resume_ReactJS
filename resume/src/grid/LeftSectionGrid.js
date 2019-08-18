import React, {Component} from 'react';
import TitleForm from "../system/LeftSection/TitleForm";
import LanguageSelect from "../system/LeftSection/LanguageSelect";
import Completeness from "../system/LeftSection/Completeness";
import Template from "../system/LeftSection/Template";
import PersonalDetails from "../system/LeftSection/PersonalDetails";
import ProfessionalSummary from "../system/LeftSection/ProfessionalSummary";
import Websites from "../system/LeftSection/WebSites";
import EmployeementHistory from "../system/LeftSection/EmploymentHistory";
import Education from "../system/LeftSection/Education";
import Skills from "../system/LeftSection/Skills";
import AddSection from "../system/LeftSection/AddSection";

class LeftSectionGrid extends Component{

    render() {
        return (
            <div className="left-section-grid">
                <div className="left-section-container">
                    <div className="left-section-content">
                        <TitleForm/>
                        <LanguageSelect/>
                        <Completeness/>
                        {/*<Template/>*/}
                        <PersonalDetails/>
                        <ProfessionalSummary/>
                        <Websites/>
                        <EmployeementHistory/>
                        <Education/>
                        <Skills/>
                        <AddSection/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSectionGrid;
