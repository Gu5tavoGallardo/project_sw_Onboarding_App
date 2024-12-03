import React from 'react';

const StudentHandbook = ({ setCurrentPage }) => {
  const guideContent = [
    {
      title: "Student Password Reset",
      description: (
        <>
          <p>
            Go to <a href="https://www.tamiu.edu/uconnect" target="_blank" rel="noopener noreferrer">
              Uconnect login issues
            </a>. Under “STUDENTS,” click "forgot password." Enter your NetID, the new password twice, and confirm identity by answering the security questions.
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
            </a>, login, and call the OIT HelpDesk for a one-time Duo code. Then, identify if you need to reactivate the app or add your phone number again.
          </p>
          <ul>
            <li>To add a phone number: Click "Add another device" and follow the steps listed on the website.</li>
            <li>To reactivate: Find your phone number, click "Device Options," and follow the steps listed.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Student Account Unlock",
      description: (
        <p>
          Go to <a href="https://dusty.tamiu.edu/passwordreset/unlockaccount.aspx" target="_blank" rel="noopener noreferrer">
            dusty.tamiu.edu
          </a>, input your NetID, and answer the security questions to access your account.
        </p>
      ),
    },
    {
      title: "Go Print Refund",
      description: (
        <p>
          If charged Go Print points but nothing was printed, visit the HelpDesk in CWT 105 to complete a Go Print Incident form. The form will be processed, and the points will be refunded.
        </p>
      ),
    },
    {
      title: "Loaner Laptop Program",
      description: (
        <p>
          Students needing a loaner laptop should visit the Office of Outreach and Pre-College to request one. Fill out the required form and wait for availability. You can also contact them at (956)326-2700.
        </p>
      ),
    },
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>OIT Student Handbook</h1>
        <p>Welcome to the guide for student resources and tools.</p>
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

export default StudentHandbook;
