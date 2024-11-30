import React, { useState } from "react";
import { auth, googleProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "../config/firebase";
import { signOut } from "firebase/auth";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Sign Up and Sign In

  // Handle Email/Password Sign In
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Signed in user:", userCredential.user);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  // Handle Email/Password Sign Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login Success:", result.user);
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{isSignUp ? "Sign Up" : "Sign In"} Page</h1>

      <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">{isSignUp ? "Sign Up" : "Sign In"}</button>
      </form>

      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
        <button onClick={() => setIsSignUp(!isSignUp)} style={{ background: "none", border: "none", color: "blue", cursor: "pointer" }}>
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>

      <button onClick={handleGoogleLogin} style={{ marginTop: "20px" }}>
        Login with Google
      </button>

      <button onClick={handleLogout} style={{ marginTop: "20px", backgroundColor: "red", color: "white" }}>
        Logout
      </button>
    </div>
  );
}

export default LoginPage;
