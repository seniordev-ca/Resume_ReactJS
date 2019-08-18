import React, {Component} from "react";
import Label from "../../../../components/Label";
import Input from "../../../../components/Input";

class Phone extends Component{
    render() {
        return (
            <div className="template-half-section">
                <div className="resume-template-content">
                    <Label value={"Phone"}/>
                    <Input/>
                </div>
            </div>
        );
    }
}

export default Phone;
