import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


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
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}projects/${id}`)
    .then((results) => {
        console.log("results",results);    
    return results.json();
    })
    
    .then((data) => {
        setProject(data);
        console.log("id-project",id.project);
        console.log("data",data);
    });
    console.log("prjonly", project);
    // console.log("prjid2", project.id);
  
    }, [id]);

    
    if (!project) {
        return <h3>Loading..</h3>;
    }
        


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
          description: project.description,
          category_id: project.category_id,
          goal: project.goal,
          goal_date: project.goal_date,
          primary_image: project.primary_image,
          secondary_image: project.secondary_image,
          is_open: project.is_open,
          is_archived: project.is_archived,
          pledge_type_id: project.pledge_type_id,


        }),
      });
      const data = await res.json();
      console.log(data);
      console.log(project);
      navigate(`/project/${project.id}/`);
    } catch (err) {
      console.log(err);
    }
  };

  if (!token || token===null || token===undefined || token==="undefined"){
    return (
      <Link to="/login">Please login to edit to this project</Link>
    );
  }

  return ( 
    <div>
      <h3>Update Your Project</h3>
    <form className="all-forms">
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
        <label htmlFor="is_open">Is Project Open:</label>
        <select id="is_open" onChange={handleChange} value={project.is_open}>
            <option value="">--Please choose an option</option>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
            
        </select>
      </div>
      <div>
        <label htmlFor="is_archived">Is Project Archived:</label>
        <select id="is_archived" onChange={handleChange} value={project.is_archived}>
            <option value="">--Please choose an option</option>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
            
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
          type="textarea"
          id="blurb"
          value={project.blurb}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="textarea"
          id="description"
          value={project.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="primary_image">Hero Image:</label>
        <input
          type="url"
          id="primary_image"
          value={project.primary_image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="secondary_image">Image:</label>
        <input
          type="url"
          id="secondary_image"
          value={project.secondary_image}
          onChange={handleChange}
        />
      </div>
      <button type="submit" onClick={handleSubmit} className="all-btn">
        Update Project
      </button>
    </form>
    </div>
  );
}

export default ProjectUpdateForm;

   