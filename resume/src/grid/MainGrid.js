import React, {Component} from 'react';
import LeftSectionGrid from "./LeftSectionGrid.js";
import RightSectionGrid from "./RightSectionGrid";
import "./grid.css"

class MainGrid extends Component {

    render() {
        return (
            <div className={"main-grid"}>
                <LeftSectionGrid/>
                <RightSectionGrid/>
            </div>
        );
    }
}

export default MainGrid;