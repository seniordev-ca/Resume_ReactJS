import React, {Component} from 'react';
import "./preview.css";
import PreviewHeader from "./PreviewHeader";
import PreviewPane from "./PreviewPane";
import PreviewFooter from "./PreviewFooter";

class Preview extends Component {

    render() {
        return (
            <div className="preview-container">
                <div className="preview-wrapper">
                    <PreviewHeader/>
                    <PreviewPane/>
                    <PreviewFooter/>
                </div>
            </div>
        );
    }
}

export default Preview;
