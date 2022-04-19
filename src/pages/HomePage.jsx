import React from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    return (
        <div>
            {allProjects.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectdata};
            })}
        </div>
    );
}

export default HomePage;