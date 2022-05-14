import React from "react";
import { Link } from "react-router-dom";
import "./MyProjectCard.css";

function MyProjectCard(props) {
    // or ProjectCard({ projectData })
    const { projectData } = props;
    return (
        <div className="my-project-card">
            <Link to={`/project/${projectData.id}`}>
                <h3>{projectData.title}</h3>
                <img src={projectData.primary_image} alt="project image"/>
                <h4>{projectData.status}</h4>
            </Link>
        </div>
    );
}

export default MyProjectCard;