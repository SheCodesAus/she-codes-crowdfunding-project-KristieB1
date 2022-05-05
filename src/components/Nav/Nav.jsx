import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            {/* <Link to="/project">Project</Link> */}
            <Link to="/login">Login</Link>
            <Link to="/users/register">Register</Link>
            <Link to="/projects">Create a Project</Link>
        </nav>
    );
}

export default Nav;