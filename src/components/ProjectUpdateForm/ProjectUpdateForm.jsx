import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


// function ProjectPage() {
//     const [projectData, setProjectData] = useState();
//     const { id } = useParams();

//     useEffect(() => {
//         fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
//         .then((results) => {
//         return results.json();
//         })
//         .then((data) => {
//             setProjectData(data);
//         });
//     }, [id]);


function ProjectUpdateForm() {
    const [project, setProject] = useState();
    const { id } = useParams();

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
    return results.json();
    })
    .then((data) => {
        setProject(data);
    });
    }, [id]);


  // State
  const token = window.localStorage.getItem("token");
//   const [project, setProject] = useState({
//     title: "",
//     blurb: "",
//     category_id: "",
//     goal: "",
//     goal_date: "",
//     primary_image: "",
//     is_open: "",
//     is_archived: "",
//     pledge_type_id: "",
//   });

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setProject((prevProject) => ({
      ...prevProject,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}projects/${project.id}/`, {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          title: project.title,
          blurb: project.blurb,
          category_id: project.category_id,
          goal: project.goal,
          goal_date: project.goal_date,
          primary_image: project.primary_image,
          is_open: true,
          is_archived: false,
          pledge_type_id: project.pledge_type_id,


        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!token) {
    return (
      <Link to="/login">Please login to pledge to this amazing project</Link>
    );
  }

  return (
    <form>
      <div>
        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          value={project.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category_id">Category:</label>
        <select id="category_id" onChange={handleChange} value={project.category_id}>
            <option value="">--Please choose an option</option>
            <option value={1}>Miscellaneous</option>
            <option value={2}>Native Animals</option>
            <option value={3}>Wetlands</option>
            <option value={4}>Coastal</option>
            <option value={5}>Forestry</option>
        </select>
      </div>
      <div>
        <label htmlFor="goal">Goal Amount:</label>
        <input
          type="number"
          id="goal"
          value={project.goal}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal_date">Goal Date:</label>
        <input
          type="date"
          id="goal_date"
          value={project.goal_date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="blurb">Blurb:</label>
        <input
          type="text"
          id="blurb"
          value={project.blurb}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="primary_image">Image:</label>
        <input
          type="url"
          id="primary_image"
          value={project.primary_image}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Update Project
      </button>
    </form>
  );
}

export default ProjectUpdateForm;

   