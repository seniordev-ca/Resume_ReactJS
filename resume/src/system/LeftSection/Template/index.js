import React, {Component} from 'react';
import ResumeTemplate from "./ResumeTemplate";
import AccentColor from "./AccentColor";
import "./template.css";

class Template extends Component{
    render() {
        return (
            <div className="template-section-wrapper">
                <div className="template-content">
                    <ResumeTemplate/>
                    <AccentColor/>
                </div>
            </div>
        );
    }
}

export default Template;