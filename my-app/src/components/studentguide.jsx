import React from 'react';

function StudentGuide({ setCurrentPage }) {
  // Static content as a placeholder while Firestore is not ready
  const content = {
    title: 'Student Onboarding Guide',
    description: 'Welcome, students! This onboarding guide will help you navigate through your first steps, access your learning resources, and settle in smoothly.',
  };

  return (
    <div className="guide-container">
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <button className="button" onClick={() => setCurrentPage('dashboard')}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default StudentGuide;
