import React from 'react';

const ProfessorGuide = ({ setCurrentPage }) => {
  const guideContent = [
    {
      title: "Professor Password Reset",
      description: (
        <>
          <p>
            Professors can reset their passwords through the <a href="https://www.tamiu.edu/uconnect" target="_blank" rel="noopener noreferrer">
              Uconnect login page
            </a>. Under "Employees," click "forgot password." Enter the NetID and the new password twice, then confirm identity by answering security questions.
          </p>
          <p>Password requirements:</p>
          <ul>
            <li>16 characters including lowercase, uppercase, number, and underscore.</li>
            <li>No names or recognizable words should be included.</li>
            <li>The password must meet the requirements to sync with Banner.</li>
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
            </a> to login and call the OIT HelpDesk for a one-time Duo code. Professors can reactivate the app or add a phone number.
          </p>
          <ul>
            <li>To add a phone number: Click "Add another device" and follow the steps.</li>
            <li>To reactivate: Find the phone number, click "Device Options," and follow the instructions.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Professor Account Unlock",
      description: (
        <p>
          Professors can unlock accounts at <a href="https://selfservice.tamiu.edu/authorization.do" target="_blank" rel="noopener noreferrer">
            selfservice.tamiu.edu
          </a>. Enter the NetID and answer the security question to regain access.
        </p>
      ),
    },
    {
      title: "Request Access to Departmental Drives",
      description: (
        <p>
          To gain access to a department drive, submit a request through the TAMIU Hotline. Professors may need authorization from their department heads.
        </p>
      ),
    },
    {
      title: "Office 365 Access",
      description: (
        <p>
          For professors encountering "No existing or missing mailbox," request a license through the TAMIU Hotline. Once granted, download the application to use Office 365 features.
        </p>
      ),
    },
    {
      title: "Reporting Suspicious Emails",
      description: (
        <p>
          Redirect suspicious emails to <a href="mailto:hotline@tamiu.edu" target="_blank" rel="noopener noreferrer">
            hotline@tamiu.edu
          </a> for review by the security team.
        </p>
      ),
    },
    {
      title: "Access to TAMIU Scheduler",
      description: (
        <p>
          The TAMIU Scheduler is managed by the Office of University Registrar. For assistance, contact (956)326-2250.
        </p>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>OIT Professor Handbook</h1>
        <p>Welcome to the guide for professors' resources and tools.</p>
      </header>
      <main>
        {guideContent.map((section, index) => (
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
        ))}
      </main>
      <footer style={{ marginTop: '30px', textAlign: 'center' }}>
        <button
          onClick={() => setCurrentPage("dashboard")}
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

export default ProfessorGuide;
