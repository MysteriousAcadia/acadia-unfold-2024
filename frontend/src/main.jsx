import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProject from "./pages/CreateProject.jsx";
import SetupBot from "./pages/SetupBot.jsx";
import ViewProjects from "./pages/ViewProjects.jsx";
import Landing from "./pages/Landing.jsx";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/setup-bot" element={<SetupBot />} />
        <Route path="/view-projects" element={<ViewProjects />} />
      </Routes>
    </Router>
  </StrictMode>
);
