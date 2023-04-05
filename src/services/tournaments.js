export const getAllTournaments = async (userId) => {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/tournaments/user/${userId}`, {
    credentials: 'include',
  });

  return res.json();
};
