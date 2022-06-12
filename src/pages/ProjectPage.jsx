import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { oneProject } from "../data";
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProgressBar from "../components/ProgressBar";

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

    const Dollars = () => {
        const isDollars =(projectData.pledge_type);
    if (isDollars == 'financial') {
        return '$' }
            return ""
    }
    
       
    const Time = () => {
        const isTime =(projectData.pledge_type);
    if (isTime == 'time') {
        return 'hours' }
            return ""
    }

    if (!projectData) {
        return <h3>Loading..</h3>;
    }
        
    
    return (
         // <React.Fragment> like a div but not</React.Fragment> or <>
        <div className="project-page">
            <h2>{projectData.title}</h2>
            <h3>Status: {projectData.status}</h3>
            <img src={projectData.primary_image} alt="hero image" id="hero-img"/>
            <h4>Date Created: {projectData.date_created}</h4>
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <h4>Project Goal: {Dollars()}{projectData.goal} {Time()}</h4>
            <h4>Goal Date: {projectData.goal_date}</h4>
            <h4>Percentage Progress towards goal:</h4>
            <ProgressBar completed={projectData.progress_perc} bgcolor={"#75B066"} />
            <img src={projectData.secondary_image} alt="project image 2" id="secondary-img"/>
            <h4>Project blurb: {projectData.blurb}</h4>
            <p>Project Info: {projectData.description}</p>
            
            <a href={"/projects/"+projectData.id} >
                <button className="all-btn"> Update Project </button>
            </a>
            <h3>Pledges:</h3>
            <p>Pledge Type: {projectData.pledge_type}</p>
            <ul>
                {projectData.pledges.map((pledgeData, key) => {
                    return (
                        <li>
                            {Dollars()}{pledgeData.amount}{Time()} from {pledgeData.supporter_name}
                        </li>
                    );
                })}
            </ul>
            <PledgeForm projectId={id}/>
        </div>
    );
}

export default ProjectPage;