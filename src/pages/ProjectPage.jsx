import React from "react";
import { oneProject } from "../data";

function ProjectPage() {
    return (
         // <React.Fragment> like a div but not</React.Fragment> or <>
        <div>
            <h2>{oneProject.title}</h2>
            <h3>Created at: {oneProject.date_created}</h3>
            <h3>{`Status: ${oneProject.is_open}`}</h3>
            <h3>Project Status: {oneProject.status}</h3>
            <h3>Project Goal: {oneProject.goal}</h3>
            <h3>Progress %: {oneProject.progress_perc}</h3>
            <img src={oneProject.primary_image} alt="project image"/>
            <h3>Project Info: {oneProject.description}</h3>
            <h3>Pledges:</h3>
            <ul>
                {oneProject.pledges.map((pledgeData, key) => {
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