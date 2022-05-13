import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { allProjects } from "../data";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import ProjectCard from "../components/ProjectCard/ProjectCard";

function UserHomePage() {
    const token = window.localStorage.getItem("token");
    const [profile, setProfile] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}users/home/`,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        }   
        })
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
            {/* {profile.map((profileData, key) => { */}
            return <ProfileCard key={1} profileData={profile} />;
            {/* })} */}
        </div>
        </div>
    );
}

export default UserHomePage;