import React, {Component} from 'react';
import Label from "../../../../components/Label";

class AccentColor extends Component{
    render() {
        return (
            <div className="template-half-section">
                <div className="accent-color-content">
                    <Label value={"Accent Color"}/>
                </div>
            </div>
        );
    }
}

export default AccentColor;