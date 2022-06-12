import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Nav.css";
import logo from "../images/logo.png";


// change nav bar options if user is logged in or not
function Nav(){

    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate("/login")
    }

    const navigateToHome = () => {
        navigate("/")
    }

    const navigateToRegister = () => {
        navigate("/users/register")
    }

    const nevigateToUserHome = () => {
        navigate("/user/home")
    }

    const handleSignout = () => {
        const token = window.localStorage.getItem("token")
        window.localStorage.removeItem("token")
        try{
            fetch(`${process.env.REACT_APP_API_URL}users/logout/`,
            {
                method: "post",
                headers:{
                    Authorization: `Token ${token}`
                }
            })
        } catch(err){
            console.log(err);
        }
        
        navigateToHome()
    }

    const checkUser = () => {
        const token = window.localStorage.getItem("token");
        // const userId = window.localStorage.getItem("id");
        const isUserLoggedin = !(token === null || token === undefined || token === "undefined")
        //if (!isUserLoggedin || isUserLoggedin===null || isUserLoggedin===undefined || isUserLoggedin==="undefined"){
        if (isUserLoggedin) {
            console.log("user is logged in isUserLoggedin=", isUserLoggedin)
        }
        else {
            console.log("user is not logged in isUserLoggedin=", isUserLoggedin)
        }

        if (isUserLoggedin) {
            return (

                <div className="right-nav">
                    {/* <button onClick={handleSignout} className="all-btn">Sign out</button> */}
                    <button onClick={nevigateToUserHome} className="all-btn">My HomePage</button>
                    <button onClick={handleSignout} className="all-btn">Sign out</button>
                </div>
            );
        }
        else {
            return (
                <div className="right-nav">
                    <button onClick={navigateToLogin} className="all-btn">Login</button>
                    <button onClick={navigateToRegister} className="all-btn">Register</button>
                </div>
            );
        }
        // return (
        //     <div>
        //         isUserLoggedin
        //         ? <button onClick={handleSignout} className="all-btn">Sign out</button>
        //         : <button onClick={navigateToLogin} className="all-btn">Login</button> 
        //          <button onClick={navigateToRegister} className="all-btn">Register</button>
        //     </div>
        //  isUserLoggedin
        //     ? <button onClick={handleSignout} className="all-btn">Sign out</button>
        //     : <button onClick={navigateToLogin} className="all-btn">Login</button> 
        //      <button onClick={navigateToRegister} className="all-btn">Register</button>

    }

    return(

        <div>
            <nav className="navbar">
                <div className="left-nav">
                    <button className="all-btn">
                        <Link to="/">Homepage</Link>
                    </button>
                    {/* <Link to="/user/home">My Home Page</Link> */}
                    <button className="all-btn">
                        <Link to="/projects">Create a Project</Link>
                    </button>
                    <button className="all-btn">
                        <Link to="/allProjects">View all Projects</Link>
                    </button>

                </div>
                <header className="Header">
                    
                    <Link to="/">
                    <img src={logo} />
                    </Link>
                </header>

                {checkUser()}

                {/* <div className="right-nav">
                    
                    {/* <Link to="/project">ProjectPage</Link> * / }
                </div> */}
            </nav>
        </div>
    );
}

export default Nav;

