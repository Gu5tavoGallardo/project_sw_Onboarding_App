// OITExtensions.js

import React from 'react';

function OITExtensions({ setCurrentPage }) {
  return (
    <div className="extensions-container">
      <h1>OIT Extension Numbers</h1>
      <p className="extension-info">
        <strong>General: 1234</strong> <br />
        <strong>IT Support: 5678</strong> <br />
        <strong>HR Support: 9101</strong>
      </p>
      <button className="button" onClick={() => setCurrentPage('home')}>Back to Home</button>
    </div>
  );
}

export default OITExtensions;
