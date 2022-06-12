import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProjectCreatePage from "./pages/ProjectCreate";
import ProjectUpdatePage from "./pages/ProjectUpdatePage";
import UserEditPage from "./pages/UserEditPage";
import UserHomePage from "./pages/UserHomePage";
import AllProjectsPage from "./pages/AllProjectsPage";


function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Routes>
          <Route path="/projects" element={<ProjectCreatePage />} />
          <Route path="/projects/:id" element={<ProjectUpdatePage />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/logout" element={<HomePage />} /> */}
          <Route path="/users/register/" element={<RegisterPage />} />
          <Route path="/users/home/" element={<UserEditPage />} />
          <Route path="/user/home/" element={<UserHomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="allProjects/" element={<AllProjectsPage />} />
          <Route path="/myProjects/" element={<UserHomePage />} />
          <Route path="/myPledges/" element={<UserHomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;