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
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;