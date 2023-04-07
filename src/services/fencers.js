export const getAllFencers = async (tournamentId) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/fencers/tournament/${tournamentId}`,
    {
      credentials: 'include',
    }
  );

  return res.json();
};
