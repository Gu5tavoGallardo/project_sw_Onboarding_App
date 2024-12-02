import React from 'react';

function ProfessorGuide({ setCurrentPage }) {
  // Static content as a placeholder while Firestore is not ready
  const content = {
    title: 'Professor Onboarding Guide',
    description: 'Welcome, professors! This onboarding guide provides information on accessing class resources, managing student portals, and getting comfortable with campus systems.',
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

export default ProfessorGuide;
