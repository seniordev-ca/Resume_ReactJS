import React, {Component} from 'react';

class EditIcon extends Component {

    render() {
        var divStyle = {
            position: 'relative',
        };

        return (
            <div className={"title-edit-icon"}>
                <div style={divStyle}>
                    <svg width="24" height="24" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.695 15.117l6.531-6.344L15.5 6l-6.625 6.296 2.82 2.82zM10.27 16.52l-2.828-2.829-.446.446v2.828h2.829l.445-.445zm2.122.707l-1.415 1.414a1 1 0 0 1-.63.29H6.116c-.612.047-1.132-.306-1.085-.917v-4.4a1 1 0 0 1 .29-.63l2.12-2.121.018.017 6.909-6.578a1.6 1.6 0 0 1 2.263 0l3.292 3.338a1.6 1.6 0 0 1 0 2.263l-7.531 7.324z">
                        </path>
                    </svg>
                </div>
            </div>
        );
    }
}

export default EditIcon;