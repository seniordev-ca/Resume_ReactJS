import React, {Component} from 'react';
import CompletenessProgress from "./CompletenessProgress";
import ProgressBar from "../../../components/ProgressBar";
import "./completeness.css"

class Completeness extends Component{

    render() {
        return (
            <div className="completeness-container">
                <div className="completeness-content">
                    <CompletenessProgress/>
                    <ProgressBar/>
                </div>
            </div>
        );
    }
}

export default Completeness;