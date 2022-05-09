import React from "react";
import {Link, useNavigate} from "react-router-dom";
// import "./Nav.css";


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
        const isUserLoggedin = !(token === null || token === undefined || token === "undefined")
        //if (!isUserLoggedin || isUserLoggedin===null || isUserLoggedin===undefined || isUserLoggedin==="undefined"){
        if(isUserLoggedin) {
        console.log("user is loged in isUserLoggedin=", isUserLoggedin)
        }
        else {
            console.log("user is not loged in isUserLoggedin=", isUserLoggedin)   
        }

        if (isUserLoggedin) {
        return (

            <nav>
            <button onClick={handleSignout} className="login-btn">Sign out</button>
            </nav>
            );
          }
        else {
        return (
            <nav>
            <button onClick={navigateToLogin} className="login-btn">Login</button>
            <button onClick={navigateToRegister} className="login-btn">Register</button>
            </nav>
            );
        }

    // return (
    //     <div>
    //         isUserLoggedin
    //         ? <button onClick={handleSignout} className="login-btn">Sign out</button>
    //         : <button onClick={navigateToLogin} className="login-btn">Login</button> 
    //          <button onClick={navigateToRegister} className="login-btn">Register</button>
    //     </div>



        //  isUserLoggedin
        //     ? <button onClick={handleSignout} className="login-btn">Sign out</button>
        //     : <button onClick={navigateToLogin} className="login-btn">Login</button> 
        //      <button onClick={navigateToRegister} className="login-btn">Register</button>
        
    }

    return(
        
        <nav className="navbar">
            <div className="left-nav">
           
            <Link to="/">Homepage</Link>
            </div>
            <Link to="/users/UserHome">My Home Page</Link>
            <Link to="/projects">Create a Project</Link>

            <div className="right-nav">
            {checkUser()}
            {/* <Link to="/project">ProjectPage</Link> */}
            </div>
        </nav>
    );
}

export default Nav;

