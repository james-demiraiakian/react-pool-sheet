import React from 'react';
import { useNavigate } from 'react-router-dom';
import ParticipantList from '../../components/ParticipantList/ParticipantList';
import { PartListProvider } from '../../context/PartListContext';
import { useUser } from '../../context/UserContext';
import './Home.css';

export default function Home() {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSignin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/api/v1/users/signin`;
  };

  return (
    <div className="home">
      <button onClick={handleSignin}>Sign In</button>
      <PartListProvider>
        <ParticipantList />
      </PartListProvider>
    </div>
  );
}
