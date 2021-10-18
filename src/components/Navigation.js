import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelectors from "./redux/auth/auth-selectors";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    fontWeight: 900,
    color: "#282c34",
  },
  activeLink: {
    color: "#61dafb",
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
