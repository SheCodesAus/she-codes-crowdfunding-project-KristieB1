import React from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    return (
        <div>
            <h1> All Projects </h1>
        <div id="project-list">
            {allProjects.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </div>
    );
}

export default HomePage;