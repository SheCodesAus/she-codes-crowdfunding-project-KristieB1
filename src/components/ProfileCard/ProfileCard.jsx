import React from "react";
import { Link } from "react-router-dom";
// import "./ProfileCard.css";

function ProfileCard(props) {
    // or ProjectCard({ projectData })
    const { profileData } = props;
    return (
        <div className="profile-card">
                <p>Username: {profileData.username}</p>
                <img src={profileData.avatar} alt="Profile avatar image" id="profile-img"/>
                <p>First Name: {profileData.firstName}</p>
                <p>Last Name: {profileData.lastName}</p>
                <p>Email: {profileData.email}</p>
                <p>Bio: {profileData.bio}</p>
                <a href={"/users/home/"} >
                <button className="all-btn"> Update Profile </button>
                </a>
        </div>
    );
}

export default ProfileCard;