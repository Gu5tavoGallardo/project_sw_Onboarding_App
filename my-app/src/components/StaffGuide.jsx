import React, { useState } from 'react';

const StaffGuide = ({ setCurrentPage }) => {
  const [error, setError] = useState(null); // Example: handling errors
  const [loading, setLoading] = useState(false); // Example: loading state

  const guideContent = [
    {
      title: "Staff Password Reset",
      description: (
        <>
          <p>
            Go to <a href="https://www.tamiu.edu/uconnect" target="_blank" rel="noopener noreferrer">
              Uconnect login issues
            </a>. Under “Employees,” click "forgot password."
            Enter your NetID, the new password twice, and confirm identity by answering security questions.
          </p>
          <p>Password requirements:</p>
          <ul>
            <li>16 characters including lowercase, uppercase, number, and underscore.</li>
            <li>No names or words should be included.</li>
            <li>The password won't sync with Banner if it doesn't meet the requirements.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Duo Reactivation",
      description: (
        <>
          <p>
            Go to <a href="https://duo.tamiu.edu/duotwofactor.aspx" target="_blank" rel="noopener noreferrer">
              duo.tamiu.edu
            </a>, login, and call the OIT HelpDesk for a one-time Duo code.
            Identify if you need to reactivate the app or add your phone number again.
          </p>
          <ul>
            <li>To add a phone number: Click "Add another device" and follow the steps.</li>
            <li>To reactivate: Find your phone number, click "Device Options," and follow the steps.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Staff Account Unlock",
      description: (
        <p>
          Go to <a href="https://selfservice.tamiu.edu/authorization.do" target="_blank" rel="noopener noreferrer">
            selfservice.tamiu.edu
          </a>, input your NetID, and answer security questions to unlock your account.
        </p>
      ),
    },
    {
      title: "Banner Request Form",
      description: (
        <p>
          Visit <a href="https://www.tamiu.edu/oit/facultystaff/oitforms.shtml" target="_blank" rel="noopener noreferrer">
            OIT Forms
          </a> and fill out the Banner request information form.
        </p>
      ),
    },
    {
      title: "Guest Account Access",
      description: (
        <p>
          Users needing guest account access must get a sponsor (usually staff or faculty) to request access for internet/accounts for third parties.
        </p>
      ),
    },
    {
      title: "Need Access to Office 365",
      description: (
        <p>
          Users seeing the message "No existing or missing mailbox" must request access through the TAMIU Hotline for a technician to apply
          a license to their account. If access exists, download the application for Office 365 features.
        </p>
      ),
    },
    {
      title: "Suspicious Emails",
      description: (
        <p>
          Forward suspicious emails asking for your information to <a href="mailto:hotline@tamiu.edu" target="_blank" rel="noopener noreferrer">
            hotline@tamiu.edu
          </a> for review.
        </p>
      ),
    },
    {
      title: "Access to TAMIU Scheduler",
      description: (
        <p>
          Access is managed by the Office of University Registrar. For assistance, contact them at (956)326-2250.
        </p>
      ),
    },
  ];

  const simulateAction = async () => {
    setLoading(true);
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setError(null);
    } catch (err) {
      setError("An error occurred!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>OIT Staff Handbook</h1>
        <p>Welcome to the guide for staff resources and tools.</p>
      </header>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <main>
        {loading ? (
          <p>Loading...</p>
        ) : (
          guideContent.map((section, index) => (
            <div
              key={index}
              style={{
                marginBottom: '20px',
                padding: '15px',
                border: '1px solid #ccc',
                borderRadius: '8px',
              }}
            >
              <h2>{section.title}</h2>
              <div>{section.description}</div>
            </div>
          ))
        )}
      </main>
      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        
        <button
          onClick={() => setCurrentPage("dashboard")} // Updates page state to "dashboard"
          style={{
            marginTop: '20px',
            padding: '10px 15px',
            backgroundColor: '#550000',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Back to Dashboard
        </button>
        <p>
          Need more help? Contact the <a href="https://www.tamiu.edu/oit/" target="_blank" rel="noopener noreferrer">
            TAMIU OIT Hotline
          </a>.
        </p>
      </footer>
    </div>
  );
};

export default StaffGuide;
