import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {
    const [projectList, setProjectList] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}latestProjects/`)
        .then((results) => {return results.json();})
        .then((data) => {setProjectList(data);});
    }, []);

    if (!projectList) {
        return <h3>Loading..</h3>;
    }

    return (

        <div className="home">

            <h1 className="quote">Welcome to ecofund, the place to support eco causes</h1>
            <br></br>
            <h2> Most Recent Projects </h2>
            <br></br>
            
        <div id="project-list">
            {projectList.map((projectData, key) => {
            return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
        </div>
    );
}

export default HomePage;