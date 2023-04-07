import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    //get user info?
  }, []);
  return (
    <div className="home">
      Select a thing to do
      <Link to={'/tournamentList'}>Tournament List</Link>
    </div>
  );
}
