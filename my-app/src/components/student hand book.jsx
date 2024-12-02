import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { doc, getDoc } from "firebase/firestore";

const StudentGuide = ({ setCurrentPage }) => {
  const [guide, setGuide] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        // Reference the specific document
        const guideRef = doc(db, "/student hand book /Newhandbook");
        const guideSnapshot = await getDoc(guideRef);

        if (guideSnapshot.exists()) {
          setGuide({ id: guideSnapshot.id, ...guideSnapshot.data() });
        } else {
          setGuide(null);
        }
      } catch (err) {
        setError("Failed to load the student handbook. Please try again.");
        console.error("Error fetching the document:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGuide();
  }, []);

  if (loading) {
    return <div>Loading student handbook...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!guide) {
    return <div>No student handbook found for the given path.</div>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>OIT Guides</h1>
      <h2>{guide.title || "Student Handbook"}</h2>
      <p>{guide.content || "No content available for this handbook."}</p>

      {/* Render additional fields dynamically */}
      {Object.keys(guide).map((key) => {
        if (key !== "title" && key !== "content" && key !== "id") {
          return (
            <div key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {String(guide[key])}
            </div>
          );
        }
        return null;
      })}

      <button
        onClick={() => setCurrentPage("dashboard")}
        style={{
          marginTop: "20px",
          padding: "10px 15px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default StudentGuide;
