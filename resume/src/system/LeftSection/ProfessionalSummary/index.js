import React, {Component} from "react";
import "./professional_summary.css";
import CategoryLabel from "../../../components/CategoryLabel";
import SubDescription from "../../../components/SubDescription";
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class ProfessionalSummary extends Component {

    render() {
        return (
            <div>
                <div className="summary-container">
                    <CategoryLabel value={"Professional Summary"}/>
                    <div>
                        <SubDescription value={"Include 2-3 clear sentences about your overall experience"}/>
                        <Editor
                            wrapperClassName="demo-wrapper"
                            editorClassName="demo-editor"
                            toolbar={{
                                inline: { inDropdown: true },
                                list: { inDropdown: true },
                                textAlign: { inDropdown: true },
                                link: { inDropdown: true },
                                history: { inDropdown: false },
                                image: { inDropdown: false },
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfessionalSummary;
