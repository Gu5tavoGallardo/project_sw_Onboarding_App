import React from 'react';
import Card from './Card';

function Dashboard({ setCurrentPage }) {
  return (
    <div className="home-container">
      <h1>Welcome to Your Dashboard</h1>
      <p>Explore the options below to continue your onboarding journey.</p>
      
      <div className="card-container">
        <Card 
          title="Student Onboarding Guide" 
          description="Access the onboarding guide tailored for students."
          buttonLabel="View Guide"
          onClick={() => setCurrentPage('studentGuide')}
        />
        <Card 
          title="Professor Onboarding Guide" 
          description="Access the onboarding guide tailored for professors."
          buttonLabel="View Guide"
          onClick={() => setCurrentPage('professorGuide')}
        />
        <Card 
          title="Staff Onboarding Guide" 
          description="Access the onboarding guide tailored for staff."
          buttonLabel="View Guide"
          onClick={() => setCurrentPage('staffGuide')}
        />
      </div>

      <button className="button" onClick={() => setCurrentPage('home')}>Back to Home</button>
    </div>
  );
}

export default Dashboard;
