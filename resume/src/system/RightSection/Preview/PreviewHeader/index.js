import React, {Component} from 'react';
import "./preview_header.css";

class PreviewHeader extends Component{
    render() {
        return (
            <div className="preview-header">
                <div className="preview-header-left">
                    <div className="preview-header-left-icon">
                    </div>
                    Saved
                </div>
                <div className="preview-header-center">
                    <div className="preview-header-center-left-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
                        </svg>
                    </div>
                    <div className="preview-header-center-pagination">
                        1 / 1
                    </div>
                    <div className="preview-header-center-right-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M9.32427537,7.23715414 L10.6757246,5.76284586 L16.6757246,11.2628459 C17.1080918,11.6591824 17.1080918,12.3408176 16.6757246,12.7371541 L10.6757246,18.2371541 L9.32427537,16.7628459 L14.5201072,12 L9.32427537,7.23715414 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviewHeader;
