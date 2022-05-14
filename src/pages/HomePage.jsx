import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects`)
        .then((results) => {return results.json();})
        .then((data) => {setProjectList(data);});
    }, []);

    if (!projectList) {
        return <h3>Loading..</h3>;
    }

    return (

        <div>
            <h2> All Active Projects </h2>
        <div id="project-list">
            {projectList.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </div>
    );
}

export default HomePage;