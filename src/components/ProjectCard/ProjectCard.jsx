import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    // or ProjectCard({ projectData })
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <img src={projectData.primary_image} alt="project image"/>
                <h3>{projectData.title}</h3>
            </Link>
        </div>
    );
}

export default ProjectCard;