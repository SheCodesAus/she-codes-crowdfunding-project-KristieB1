import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LoginForm() {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

    
    const token = window.localStorage.getItem("token");
        
    // const postData = async () => {
    //     const response = await fetch(
    //         `${process.env.REACT_APP_API_URL}api-token-auth/`,
    //     {
    //     method: "post",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(credentials),
    //     }
    //     );

    //     return response.json();
    // };

  
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (credentials.username && credentials.password) {
    //     postData().then((response) => {
    //     window.localStorage.setItem("token", response.token);
    //     history.push("/");
    //     });
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}api-token-auth/`,
                    {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    }
                );
                const data = await response.json();
                
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", credentials.username);
                if (data.token===undefined) {
                    console.log("hello")
                    return (
                      <h2 >Incorrect credentials</h2>
                    );
                  }
        else{
                navigate("/");
            }
            } catch (err) {
                console.log(err);
            }
        
          
        }
    };

    // if (!token) {
    //     return (
    //       <Link to="/login">Incorrect credentials</Link>
    //     );
    //   }
    


    return (
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter username"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Login
            </button>
        </form>
    );
}

export default LoginForm;