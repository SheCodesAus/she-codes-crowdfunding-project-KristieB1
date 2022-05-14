import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard(props) {
    // or ProjectCard({ projectData })
    const { projectData } = props;
    return (
        <div className="project-card">
            <Link to={`/project/${projectData.id}`}>
                <h2 className="project-main-title">{projectData.title}</h2>
                </Link>
                <img src={projectData.primary_image} alt="project image"/>
                <h3>{projectData.status}</h3>
                <p>{projectData.blurb}</p>
            
        </div>
    );
}

export default ProjectCard;