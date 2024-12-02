import React, { useState, lazy, Suspense, useEffect } from "react";
import { auth } from "./config/firebase"; // Firebase authentication
import { onAuthStateChanged } from "firebase/auth";

// Dynamic imports for better performance
const SignIn = lazy(() => import("./components/SignIn.jsx"));
const SignUp = lazy(() => import("./components/SignUp.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const StudentGuide = lazy(() => import("./components/student hand book.jsx"));
const ProfessorGuide = lazy(() => import("./components/ProfessorGuide.jsx"));
const StaffGuide = lazy(() => import("./components/StaffGuide.jsx"));
const OITExtensions = lazy(() => import("./components/OITExtensions.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [user, setUser] = useState(null);

  // Listen to authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user:", currentUser); // Debug log
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  

  const renderPage = () => {
    switch (currentPage) {
      case "signin":
        return <SignIn setCurrentPage={setCurrentPage} />;
      case "signup":
        return <SignUp setCurrentPage={setCurrentPage} />;
      case "dashboard":
        return user ? (
          <Dashboard setCurrentPage={setCurrentPage} />
        ) : (
          <SignIn setCurrentPage={setCurrentPage} />
        );
      case "studentGuide":
        return user ? (
          <StudentGuide setCurrentPage={setCurrentPage} />
        ) : (
          <SignIn setCurrentPage={setCurrentPage} />
        );
      case "professorGuide":
        return user ? (
          <ProfessorGuide setCurrentPage={setCurrentPage} />
        ) : (
          <SignIn setCurrentPage={setCurrentPage} />
        );
      case "staffGuide":
        return user ? (
          <StaffGuide setCurrentPage={setCurrentPage} />
        ) : (
          <SignIn setCurrentPage={setCurrentPage} />
        );
      case "extensions":
        return user ? (
          <OITExtensions setCurrentPage={setCurrentPage} />
        ) : (
          <SignIn setCurrentPage={setCurrentPage} />
        );
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
