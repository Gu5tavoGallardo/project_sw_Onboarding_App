import React from 'react';

function StaffGuide({ setCurrentPage }) {
  // Static content as a placeholder while Firestore is not ready
  const content = {
    title: 'Staff Onboarding Guide',
    description: 'Welcome, staff members! This guide will provide you with everything you need to get started, from setting up your workspace to understanding administrative resources.',
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

export default StaffGuide;
