import React, {Component} from 'react';

class CompletenessProgress extends Component{

    render() {
        return (
            <div className="completeness-progress-wrapper">
                <div className="progress-percentage-div">
                    <div className="progress-percentage-value">
                        18
                    </div>
                    Profile completeness
                </div>
                <div className="progress-comments-div">
                    <div className="progress-comments-container">
                        <div>
                            <div className="progress-comments-percentage-wrapper">
                                <div className="progress-comments-percentage-value">
                                    +10
                                </div>
                                Add profile summary
                            </div>
                        </div>
                    </div>
                    <div className="progress-comments-help-icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.8,12 C22.8,6.04041451 17.9595855,1.2 12,1.2 C6.04041451,1.2 1.2,6.04041451 1.2,12 C1.2,17.9595855 6.04041451,22.8 12,22.8 C17.9595855,22.8 22.8,17.9595855 22.8,12 Z M11.9440415,8.81036269 C11.6642487,8.78238342 11.384456,8.89430052 11.1606218,9.09015544 C10.9647668,9.28601036 10.92,9.56580311 10.92,9.84559585 L8.76,9.84559585 C8.76,8.92227979 8.83834197,8.02694301 9.50984456,7.38341969 C10.1813472,6.73989637 11.0766839,6.40414508 12.0279793,6.43212435 C13.7626943,6.51606218 15.1896373,7.94300518 15.2735751,9.67772021 C15.3295337,11.1326425 14.4901554,12.4756477 13.119171,13.0072539 C13.0911917,13.0352332 13.0352332,13.0911917 13.0352332,13.1751295 L13.0352332,14.16 L10.6569948,14.16 L10.6569948,13.1751295 C10.6569948,12.1119171 11.2725389,11.188601 12.2238342,10.8248705 C12.6435233,10.6569948 12.8953368,10.2373057 12.8673575,9.78963731 C12.8953368,9.28601036 12.4476684,8.83834197 11.9440415,8.81036269 Z M12,17.94 C11.2544156,17.94 10.65,17.3355844 10.65,16.59 C10.65,15.8444156 11.2544156,15.24 12,15.24 C12.7455844,15.24 13.35,15.8444156 13.35,16.59 C13.35,17.3355844 12.7455844,17.94 12,17.94 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompletenessProgress;