import React, { useState } from "react";
import SignIn from "./components/SignIn.jsx"; // Adjust paths based on your file structure
import SignUp from "./components/SignUp.jsx";
import Dashboard from "./components/Dashboard.jsx";
import StudentGuide from "./components/studentguide.jsx";
import ProfessorGuide from "./components/ProfessorGuide.jsx";
import StaffGuide from "./components/StaffGuide.jsx";
import OITExtensions from "./components/OITExtetions.jsx"; // Adjust the file name if necessary
import Home from "./components/Home.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "signin":
        return <SignIn setCurrentPage={setCurrentPage} />;
      case "signup":
        return <SignUp setCurrentPage={setCurrentPage} />;
      case "dashboard":
        return <Dashboard setCurrentPage={setCurrentPage} />;
      case "studentGuide":
        return <StudentGuide setCurrentPage={setCurrentPage} />;
      case "professorGuide":
        return <ProfessorGuide setCurrentPage={setCurrentPage} />;
      case "staffGuide":
        return <StaffGuide setCurrentPage={setCurrentPage} />;
      case "extensions":
        return <OITExtensions setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
}

export default App;
