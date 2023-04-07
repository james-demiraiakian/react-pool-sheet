import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import LandingPage from './views/LandingPage/LandingPage';
import CreateTournament from './components/Tournament/Create/CreateTournament';
import TournamentList from './components/Tournament/List/TournamentList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createTournament" element={<CreateTournament />} />
        <Route path="/tournamentList" element={<TournamentList />} />
      </Routes>
    </div>
  );
}

export default App;
