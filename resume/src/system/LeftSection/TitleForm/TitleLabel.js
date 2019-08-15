import React, {Component} from 'react';

class TitleLabel extends Component{
    render() {
        return (
            <div className="title-label">
                <input placeholder="Untitled" className="title-label-input" value="Untitled"/>
                <div className="title-label-underline"></div>
                <div className="title-label-text">Untitled</div>
            </div>
        );
    }
}

export default TitleLabel;