import React from "react";
import {Link, useNavigate} from "react-router-dom";
// import "./Nav.css";


function Nav(){

    const navigate = useNavigate();
    
    const navigateToLogin = () => {
        navigate("/login")
    }

    const navigateToRegister = () => {
        navigate("/users/register")
    }

    const handleSignout = () => {
        window.localStorage.removeItem("token")
        navigateToLogin()
    }

    const checkUser = () => {
        const isUserLoggedin = !!window.localStorage.getItem("token");
        console.log("isUserLoggedin", isUserLoggedin)

        return isUserLoggedin
            ? <button onClick={handleSignout} className="login-btn">Sign out</button>
            : <button onClick={navigateToLogin} className="login-btn">Login</button> 
            //  <button onClick={navigateToRegister} className="login-btn">Register</button>
        
    }

    return(
        
        <nav className="navbar">
            <div className="left-nav">
           
            <Link to="/">Homepage</Link>
            </div>
            
            
            {checkUser()}
            <Link to="/users/register">Register</Link>
            <Link to="/users/UserHome">My Home Page</Link>
            <Link to="/projects">Create a Project</Link>
            {/* <Link to="/project">ProjectPage</Link> */}
        </nav>
    );
}

export default Nav;

