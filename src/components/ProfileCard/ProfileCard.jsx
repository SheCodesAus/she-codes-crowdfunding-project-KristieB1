import React from "react";
import { Link } from "react-router-dom";
// import "./ProfileCard.css";

function ProfileCard(props) {
    // or ProjectCard({ projectData })
    const { profileData } = props;
    return (
        <div className="profile-card">
            <Link to="/users/home/">
                <h2>{profileData.username}</h2>
                <img src={profileData.avatar} alt="Profile avatar image"/>
                <h3>{profileData.firstName}</h3>
                <p>{profileData.bio}</p>
            </Link>
        </div>
    );
}

export default ProfileCard;