import React from 'react';
import '../styles.css';

function Card({ title, description, buttonLabel, onClick }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="button" onClick={onClick}>{buttonLabel}</button>
    </div>
  );
}

export default Card;
