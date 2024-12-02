import React, { useState, lazy, Suspense } from "react";

// Dynamic imports for better performance
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const SignUp = lazy(() => import("./components/SignUp.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const StudentGuide = lazy(() => import("./components/StudentGuide.jsx")); // Fixed case sensitivity
const ProfessorGuide = lazy(() => import("./components/ProfessorGuide.jsx"));
const StaffGuide = lazy(() => import("./components/StaffGuide.jsx"));
const OITExtensions = lazy(() => import("./components/OITExtensions.jsx")); // Fixed typo
const Home = lazy(() => import("./components/Home.jsx"));

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

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>{renderPage()}</div>
    </Suspense>
  );
}

export default App;
