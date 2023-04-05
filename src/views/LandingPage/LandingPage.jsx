import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useUser } from '../../context/UserContext';

export default function LandingPage() {
  const handleSignin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/api/v1/users/signin`;
  };

  return (
    <div className="landingPage">
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
}
