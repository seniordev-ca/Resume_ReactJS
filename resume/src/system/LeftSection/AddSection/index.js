import React, {Component} from "react";
import CategoryLabel from "../../../components/CategoryLabel";
import AddSectionButton from "../../../components/AddSectionButton";
import "./add_section.css";

class AddSection extends Component {

    render() {
        return (
            <div>
                <div className="summary-container">
                    <CategoryLabel value={"Add Section"}/>
                    <div className="add-section-buttons-container">
                        <AddSectionButton type={"add-section-custom"} text={"Custom Section"}/>
                        <AddSectionButton type={"add-section-courses"} text={"Courses"}/>
                        <AddSectionButton type={"add-section-activities"} text={"Extra-curricular Activities"}/>
                        <AddSectionButton type={"add-section-internships"} text={"Internships"}/>
                        <AddSectionButton type={"add-section-hobbies"} text={"Hobbies"}/>
                        <AddSectionButton type={"add-section-languages"} text={"Languages"}/>
                        <AddSectionButton type={"add-section-references"} text={"References"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSection;
