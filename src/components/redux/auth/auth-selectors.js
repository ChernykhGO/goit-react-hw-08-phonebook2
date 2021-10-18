const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getUserEmail = (state) => state.auth.user.email;
const getUsername = (state) => state.auth.user.name;
const getisFetchingUser = (state) => state.auth.isFetchingUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getUserEmail,
  getisFetchingUser,
};

export default authSelectors;
