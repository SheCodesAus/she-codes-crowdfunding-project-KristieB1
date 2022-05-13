import React, { useState, useEffect } from "react";
import { allProjects } from "../data";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function UserHomePage() {
    const [profile, setProfile] = useState();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users`)
        .then((results) => {return results.json();})
        .then((data) => {setProfile(data);});
    }, []);

    if (!profile) {
        return <h3>Loading..</h3>;
    }

    return (

        <div>
            <h1> User Home </h1>
        <div id="profile-page">
            {profile.map((profileData, key) => {
            return <ProfileCard key={key} profileData={profileData} />;
            })}
        </div>
        </div>
    );
}

export default UserHomePage;