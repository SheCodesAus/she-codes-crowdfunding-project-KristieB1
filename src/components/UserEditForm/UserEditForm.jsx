import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function UserEditForm() {
    const [credentials, setCredentials] = useState ();
    
    // ({
    //     email: "",
    //     username: "",
    //     firstName: "",
    //     lastName: "",
    //     password: "",
    //     password2: "",
    // });

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const token = window.localStorage.getItem("token");

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}users/home`,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
        }   
        })
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

    if (!credentials) {
        return <h3>Loading..</h3>;
    }

    

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
                    `${process.env.REACT_APP_API_URL}users/home/`,
                    {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Token ${token}`,
                        },
                        body: JSON.stringify(credentials),
                    }
                );
                const data = await response.json();
                window.localStorage.setItem("token", data.token);
                window.localStorage.setItem("username", credentials.username);
                navigate("/users/:id/");
            } catch (err) {
                console.log(err);
            }
        }
    };


    if (!token || token===null || token===undefined || token==="undefined") {
        return (
          <Link to="/login">Please login to create a project</Link>
        );
      }

    return (
        <form>
            <div>
                <h3>Update Your Details </h3>
            </div>
            
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={credentials.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="firstName">FirstName:</label>
                <input
                    type="text"
                    id="firstName"
                    value={credentials.firstName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">LastName:</label>
                <input
                    type="text"
                    id="lastName"
                    value={credentials.lastName}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="avatar">Avatar:</label>
                <input
                    type="url"
                    id="avatar"
                    value={credentials.avatar}
                    placeholder="Enter Avatar image URL"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="bio">Bio:</label>
                <input
                    type="textarea"
                    id="bio"
                    value={credentials.bio}
                    placeholder="Enter your Bio"
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>
                Update Your Profile
            </button>
        </form>
    );
}

export default UserEditForm;