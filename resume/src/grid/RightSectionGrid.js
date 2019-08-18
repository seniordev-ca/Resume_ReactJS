import React, {Component} from 'react';
import CloseButton from "../components/CloseButton";
import Preview from "../system/RightSection/Preview";

class RightSectionGrid extends Component{

    render() {
        return (
            <div className={"right-section-grid"}>
                <CloseButton/>
                <Preview/>
            </div>
        );
    }
}

export default RightSectionGrid;
