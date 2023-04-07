export const getAllBouts = async (tournamentId) => {
  const res = await fetch(
    `${process.env.REACT_APP_API_URL}/api/v1/bouts/tournament/${tournamentId}`,
    {
      credentials: 'include',
    }
  );

  return res.json();
};
