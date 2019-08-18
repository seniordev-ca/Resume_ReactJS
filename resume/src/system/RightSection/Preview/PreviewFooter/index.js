import React, {Component} from 'react';
import "./preview_footer.css";

class PreviewFooter extends Component{
    render() {
        return (
            <div className="preview-footer">
                <span className="preview-footer-left-wrapper">
                    <div className="preview-footer-left-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.5 5.5v4h4v-4h-4zM11 4v7H4V4h7zm3.5 1.5v4h4v-4h-4zM20 4v7h-7V4h7zM5.5 14.5v4h4v-4h-4zM11 13v7H4v-7h7zm3.5 1.5v4h4v-4h-4zM20 13v7h-7v-7h7z"></path>
                        </svg>
                    </div>
                    <div className="preview-footer-left-text">
                        Select template
                    </div>
                </span>
                <div className="preview-footer-right-wrapper">
                    <button className="preview-share-button">Share</button>
                    <button className="preview-download-button">Download</button>
                </div>
            </div>
        );
    }
}

export default PreviewFooter;
