import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";
import PledgeForm from "../components/PledgeForm/PledgeForm";

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
            <h3>Status: {projectData.status}</h3>
            <img src={projectData.primary_image} alt="hero image"/>
            <h3>Date Created: {projectData.date_created}</h3>
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <h3>Project Goal: {projectData.goal}</h3>
            <h3>Goal Date: {projectData.goal_date}</h3>
            <h3>Progress %: {projectData.progress_perc}</h3>
            <img src={projectData.secondary_image} alt="project image 2"/>
            <h3>Project blurb: {projectData.blurb}</h3>
            <h3>Project Info: {projectData.description}</h3>
            
            <a href={"/projects/"+projectData.id} >
                <button> Update Project </button>
            </a>
            <h3>Pledges:</h3>
            <p>Pledge Type: {projectData.pledge_type}</p>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {pledgeData.amount} from {pledgeData.supporter_name}
                        </li>
                    );
                })}
            </ul>
            <PledgeForm projectId={id}/>
        </div>
    );
}

export default ProjectPage;