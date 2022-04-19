import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props) {
    const { projectData } = props;
    return (
        <div>
            <Link to="/project">
                <img src={projectData.primary_image}/>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;