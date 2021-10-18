import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    fontWeight: 900,
    color: "#282c34",
    marginLeft: "20px",
  },
  activeLink: {
    color: "#61dafb",
  },
};

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        href="#"
        underline="none"
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Логин
      </NavLink>
    </div>
  );
}
