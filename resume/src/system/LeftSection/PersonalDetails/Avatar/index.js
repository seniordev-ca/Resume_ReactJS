import React, {Component} from "react";
import "./avatar.css";

class Avatar extends Component{
    render() {
        return (
            <div className="template-half-section">
                <div className="avatar-container">
                    <div className="avatar-wrapper">
                        <div className="avatar-picture"></div>
                        <div>
                            <div className="avatar-edit-wrapper">
                                <div className="avatar-edit-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.695 15.117l6.531-6.344L15.5 6l-6.625 6.296 2.82 2.82zM10.27 16.52l-2.828-2.829-.446.446v2.828h2.829l.445-.445zm2.122.707l-1.415 1.414a1 1 0 0 1-.63.29H6.116c-.612.047-1.132-.306-1.085-.917v-4.4a1 1 0 0 1 .29-.63l2.12-2.121.018.017 6.909-6.578a1.6 1.6 0 0 1 2.263 0l3.292 3.338a1.6 1.6 0 0 1 0 2.263l-7.531 7.324z"></path>
                                    </svg>
                                </div>
                                Edit photo
                            </div>
                            <div className="avatar-delete-wrapper">
                                <div className="avatar-delete-icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8,19 L16,19 L16,13 L8,13 L8,19 Z M16,7 L20,7 L20,9 L4,9 L4,7 L8,7 L8,3 L16,3 L16,7 Z M14,7 L14,5 L10,5 L10,7 L14,7 Z M6,11 L18,11 L18,21 L6,21 L6,11 Z" fill-rule="nonzero"></path>
                                    </svg>
                                </div>
                                Delete
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Avatar;
