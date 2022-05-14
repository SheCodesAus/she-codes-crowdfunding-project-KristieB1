import React from "react";
import { Link } from "react-router-dom";
import "./MyPledgesCard.css";

function MyPledgesCard(props) {
    // or ProjectCard({ projectData })
    const { pledgeData } = props;

    const Dollars = () => {
        const isDollars =(pledgeData.pledge_type);
    if (isDollars == 'financial') {
        return '$' }
            return ""
    }
    
       
    const Time = () => {
        const isTime =(pledgeData.pledge_type);
    if (isTime == 'time') {
        return 'hours' }
            return ""
    }

   
    return (
        <div className="my-pledge-card">
            <p> Against Project: {pledgeData.project_title}</p>
            <ul>
                <li>
                    You Pledged:  {Dollars()}{pledgeData.amount}{Time()}</li>
                
            </ul>
        </div>
    );
}

export default MyPledgesCard;