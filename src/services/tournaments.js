export const getAllTournaments = async (userId) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tournaments/user/${userId}`, {
    credentials: 'include',
  });

  return res.json();
};

export const addTournament = async (tournament) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tournaments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(tournament),
  });

  return res.json();
};

export const updateTournament = async (tournament) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tournaments/${tournament.id}`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(tournament),
  });

  return res.json();
};

export const getTournament = async (id) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tournaments/${id}`, {
    method: 'GET',
    credentials: 'include',
  });

  return res.json();
};
