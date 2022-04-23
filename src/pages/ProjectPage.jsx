import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";

function ProjectPage() {
    const [projectData, setProjectData] = useState();
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);

    if (!projectData) {
        return <h3>Loading..</h3>;
    }
        
    
    return (
         // <React.Fragment> like a div but not</React.Fragment> or <>
        <div>
            <h2>{projectData.title}</h2>
            <h3>Created at: {projectData.date_created}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <h3>Project Status: {projectData.status}</h3>
            <h3>Project Goal: {projectData.goal}</h3>
            <h3>Progress %: {projectData.progress_perc}</h3>
            <img src={projectData.primary_image} alt="project image"/>
            <h3>Project Info: {projectData.description}</h3>
            <h3>Pledges:</h3>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectPage;