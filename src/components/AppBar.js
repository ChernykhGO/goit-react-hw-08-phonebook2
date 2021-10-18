import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "./UserMenu/UserMenu";
import AuthNav from "./AuthNav";
import authSelectors from ".././components/redux/auth/auth-selectors";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default function AppBarComponent() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }} component="div">
          <Navigation />
        </Typography>
        <Typography variant="h6">
          {" "}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}{" "}
        </Typography>
      </Toolbar>
    </AppBar>
    // <header style={styles.header}>
    //   <Navigation />
    //   {isLoggedIn ? <UserMenu /> : <AuthNav />}
    // </header>
  );
}
