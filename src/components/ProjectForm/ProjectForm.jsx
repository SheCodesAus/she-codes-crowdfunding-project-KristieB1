import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ProjectForm() {
  // State
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();
  const [project, setProject] = useState({
    title: "",
    blurb: "",
    description: "",
    category_id: "",
    goal: "",
    goal_date: "",
    primary_image: "",
    secondary_image: "",
    is_open: "",
    is_archived: "",
    pledge_type_id: "",
  });

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
      const res = await fetch(`${process.env.REACT_APP_API_URL}projects/`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({
          title: project.title,
          blurb: project.blurb,
          description: project.description,
          category_id: project.category_id,
          goal: project.goal,
          goal_date: project.goal_date,
          primary_image: project.primary_image,
          secondary_image: project.primary_image,
          is_open: true,
          is_archived: false,
          pledge_type_id: project.pledge_type_id,


        }),
      });
      const data = await res.json();
      console.log(data);
      navigate(`/project/${data.id}/`);
    } catch (err) {
      console.log(err);
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
        <label htmlFor="title">Project Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter Your title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="category_id">Category:</label>
        <select id="category_id" onChange={handleChange}>
            <option value="">--Please choose an option</option>
            <option value={1}>Miscellaneous</option>
            <option value={2}>Native Animals</option>
            <option value={3}>Wetlands</option>
            <option value={4}>Coastal</option>
            <option value={5}>Forestry</option>
        </select>
      </div>
      <div>
        <label htmlFor="pledge_type_id">Pledge Type:</label>
        <select id="pledge_type_id" onChange={handleChange}>
            <option value="">--Please choose an option</option>
            <option value={1}>financial</option>
            <option value={2}>time</option>
        </select>
      </div>
      <div>
        <label htmlFor="goal">Goal Amount:</label>
        <input
          type="number"
          id="goal"
          placeholder="Enter Your Goal"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="goal_date">Goal Date:</label>
        <input
          type="date"
          id="goal_date"
          placeholder="Enter Your Goal Date"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="blurb">Blurb:</label>
        <input
          type="textarea"
          id="blurb"
          placeholder="Enter a short blurb"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="textarea"
          id="description"
          placeholder="Enter your project description"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="primary_image">Image:</label>
        <input
          type="url"
          id="primary_image"
          placeholder="Enter your main image URL"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="secondary_image">Image:</label>
        <input
          type="url"
          id="secondary_image"
          placeholder="Enter your secondary image URL"
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Create New Project
      </button>
    </form>
  );
}

export default ProjectForm;

   