export const getCurrentUser = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/me`, {
      credentials: 'include',
    });

    return res.json();
  } catch (error) {
    return null;
  }
};
