import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function UserEditForm() {
    const [credentials, setCredentials] = useState({
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
    });
    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/${id}`)
    .then((results) => {
        console.log("results",results);    
    return results.json();
    })
    
    .then((data) => {
        setCredentials(data);
        console.log("id-user",id.user);
        console.log("data",data);
    });
    
  
    }, [id]);

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
        }));
    };

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
        if (credentials.username && credentials.password && credentials.password2) {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_URL}user/${id}`,
                    {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    }
                );
                const data = await response.json();
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", credentials.username);
                navigate("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };


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
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="firstName">FirstName:</label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">LastName:</label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Enter your last name"
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
            <div>
                <label htmlFor="password2">Repeat Password:</label>
                <input
                    type="password"
                    id="password2"
                    placeholder="Repeat Password"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Register
            </button>
        </form>
    );
}

export default UserEditForm;