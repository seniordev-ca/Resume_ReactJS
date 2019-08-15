import React, {Component} from 'react';
import TitleForm from "../system/LeftSection/TitleForm";
import LanguageSelect from "../system/LeftSection/LanguageSelect";
import Completeness from "../system/LeftSection/Completeness";
import Template from "../system/LeftSection/Template";

class LeftSectionGrid extends Component{

    render() {
        return (
            <div className="left-section-grid">
                <div className="left-section-container">
                    <div className="left-section-content">
                        <TitleForm/>
                        <LanguageSelect/>
                        <Completeness/>
                        <Template/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftSectionGrid;