import React, {Component} from 'react'
import "./language_select.css"

class LanguageSelect extends Component{
    render() {
        return (
            <div className="language-select">
                <div className="language-select-content">
                    <div className="language-button-div">
                        <div className="country-flag"></div>
                        English
                    </div>
                </div>
            </div>
        );
    }
}

export default LanguageSelect;