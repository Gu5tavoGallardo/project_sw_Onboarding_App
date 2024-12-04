import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../config/firebase'; // Correct path

function SignIn({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage(`Welcome, ${user.email}!`);
      setTimeout(() => {
        setLoading(false);
        setCurrentPage('dashboard');
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h1>Sign In</h1>
      <form onSubmit={handleEmailSignIn}>
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
        <button type="submit" className="button" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
      {message && <p className="message">{message}</p>}
      <button className="button" onClick={() => setCurrentPage('home')}>
        Back
      </button>
    </div>
  );
}

export default SignIn;
