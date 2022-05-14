import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { allProjects } from "../data";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import MyProjectCard from "../components/MyProjectCard/MyProjectCard";
import MyPledgesCard from "../components/MyPledgesCard/MyPledgesCard";

function UserHomePage() {
    const token = window.localStorage.getItem("token");
    const [profile, setProfile] = useState();
    const [projectList, setProjectList] = useState();
    const [pledgeList, setPledgeList] = useState();
    // const navigate = useNavigate();
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


        fetch(`${process.env.REACT_APP_API_URL}myProjects/`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            }   
            })
            .then((results) => {return results.json();})
            .then((data) => {setProjectList(data);});


        fetch(`${process.env.REACT_APP_API_URL}myPledges/`,{
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${token}`,
            }   
            })
            .then((results) => {return results.json();})
            .then((data) => {setPledgeList(data);});
    }, []);

    if (!profile || !projectList || !pledgeList) {
        return <h3>Loading..</h3>;
    }

    // useEffect(() => {
    //     fetch(`${process.env.REACT_APP_API_URL}myProjects/`,{
    //     headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Token ${token}`,
    //     }   
    //     })
    //     .then((results) => {return results.json();})
    //     .then((data) => {setProject(data);});
    // }, []);

    // if (!project) {
    //     return <h3>Loading..</h3>;
    // }

    return (
        <div className="UserHome-mainDiv">
            <h2> Your Home Page </h2>
        <div id="profile-page">
            <h3>Profile</h3>
        <div>
            {/* {profile.map((profileData, key) => { */}
             <ProfileCard key={1} profileData={profile} />
            {/* })} */}
        </div>
        </div>
        <div>
        <h3>My Projects</h3>
        <div id="MyProjects">
           {projectList.map((projectData, key) => {
           return <MyProjectCard key={key} projectData={projectData} />;
             })} 
        </div>
        </div>
        <div id="MyPledges">
           <h3>My Pledges</h3>
           {pledgeList.map((pledgeData, key) => {
           return <MyPledgesCard key={key} pledgeData={pledgeData} />;
             })} 
        </div>
        </div>
    );
}

export default UserHomePage;