import React, {Component} from 'react';
import "./close_button.css";

class CloseButton extends Component {

    render() {
        return (
            <a className="close-button" href="localhost">
                <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M11.987107,10.5728934 L16.2800002,6.28000021 L17.6942138,7.69421377 L13.4013206,11.987107 L17.6942138,16.2800002 L16.2800002,17.6942138 L11.987107,13.4013206 L7.69421377,17.6942138 L6.28000021,16.2800002 L10.5728934,11.987107 L6.28000021,7.69421377 L7.69421377,6.28000021 L11.987107,10.5728934 Z"></path>
                </svg>
            </a>
        );
    }
}

export default CloseButton;
