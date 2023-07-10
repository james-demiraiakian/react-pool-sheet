export const getAllFencers = async (tournamentId) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/fencers/tournament/${tournamentId}`,
    {
      credentials: 'include',
    }
  );

  return res.json();
};

export const addFencer = async (fencer) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/fencers/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    mode: 'cors',
    body: JSON.stringify(fencer),
  });

  return res.json();
};

export const getFencerById = async (fencerId) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/fencers/${fencerId}`, {
    credentials: 'include',
  });

  return res.json();
};
