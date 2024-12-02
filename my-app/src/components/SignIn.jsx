import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function SignIn({ setCurrentPage }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const auth = getAuth();

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

  const handleGoogleSignIn = async () => {
    setLoading(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setMessage(`Welcome, ${user.displayName || user.email}!`);
      setTimeout(() => {
        setLoading(false);
        setCurrentPage('dashboard');
      }, 1000);
    } catch (error) {
      setLoading(false);
      setMessage('Google sign-in failed. Please try again.');
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
          {loading ? 'Signing In...' : 'Sign In with Email'}
        </button>
      </form>
      <button className="button google-button" onClick={handleGoogleSignIn} disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In with Google'}
      </button>
      {message && <p className="message">{message}</p>}
      <button className="button" onClick={() => setCurrentPage('home')}>
        Back
      </button>
    </div>
  );
}

export default SignIn;
