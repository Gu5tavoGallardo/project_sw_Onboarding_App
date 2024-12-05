// OITExtensions.js

import React from 'react';

function OITExtensions({ setCurrentPage }) {
  return (
    <div className="extensions-container">
      <h1>OIT Extension Numbers</h1>
      <p className="extension-info">
        <strong>Help Desk 956-326-2310</strong> <br />
        <strong>E-Learning 956-326-2792</strong> <br />
        <strong>Visual Audio 956-326-2017</strong>
      </p>
      <button className="button" onClick={() => setCurrentPage('home')}>Back to Home</button>
    </div>
  );
}

export default OITExtensions;
