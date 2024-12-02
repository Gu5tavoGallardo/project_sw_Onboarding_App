import React from 'react';
import Card from './Card';

function Home({ setCurrentPage }) {
  return (
    <div className="home-container">
      <h1>Welcome to the Onboarding Portal</h1>
      <p>Your journey begins here. Please sign in or create an account to get started.</p>
      
      <div className="button-container">
        <button className="button" onClick={() => setCurrentPage('signin')}>Sign In</button>
        <button className="button" onClick={() => setCurrentPage('signup')}>Sign Up</button>
      </div>

      <div className="card-container">
        <Card 
          title="OIT Extension Numbers" 
          description="Contact our support team for any onboarding issues. Available during office hours."
          buttonLabel="View Extensions"
          onClick={() => setCurrentPage('extensions')}
        />
      </div>
    </div>
  );
}

export default Home;
