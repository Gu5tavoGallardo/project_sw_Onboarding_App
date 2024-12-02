import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function SignUp({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage(`User ${user.email} created successfully!`);
      setTimeout(() => {
        setCurrentPage('home');
      }, 1000);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('This email is already in use.');
      } else if (error.code === 'auth/weak-password') {
        setMessage('Password should be at least 6 characters.');
      } else {
        setMessage('Error signing up, please try again.');
      }
    }
  };

  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Sign Up
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <button className="button" onClick={() => setCurrentPage('home')}>
        Back
      </button>
    </div>
  );
}

export default SignUp;
