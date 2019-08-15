import React, {Component} from 'react';
import TitleLabel from "./TitleLabel";
import EditIcon from "./EditIcon";
import "./title.css";

class TitleForm extends Component{
    render() {
        return (
            <div className={"title-form"}>
                <div className={"title-form-content"}>
                    <TitleLabel/>
                    <EditIcon/>
                </div>
            </div>
        );
    }
}

export default TitleForm;