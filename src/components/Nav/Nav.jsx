import React from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Nav.css";


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
        if(isUserLoggedin) {
        console.log("user is logged in isUserLoggedin=", isUserLoggedin)
        }
        else {
            console.log("user is not logged in isUserLoggedin=", isUserLoggedin)   
        }

        if (isUserLoggedin) {
        return (

            <nav>
            {/* <button onClick={handleSignout} className="all-btn">Sign out</button> */}
            <button onClick={nevigateToUserHome} className="all-btn">My HomePage</button>
            <button onClick={handleSignout} className="all-btn">Sign out</button>
            </nav>
            );
          }
        else {
        return (
            <nav>
            <button onClick={navigateToLogin} className="all-btn">Login</button>
            <button onClick={navigateToRegister} className="all-btn">Register</button>
            </nav>
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
           
            <Link to="/">Homepage</Link>
            {/* <Link to="/user/home">My Home Page</Link> */}
            <Link to="/projects">Create a Project</Link>
            </div>
        <header className="Header">
            <h1>EcoFund</h1>
        </header>
        <nav>
        <div className="right-nav">
            {checkUser()}
            {/* <Link to="/project">ProjectPage</Link> */}
            </div>
        </nav>
       
           

            
        </nav>
        </div>
    );
}

export default Nav;

