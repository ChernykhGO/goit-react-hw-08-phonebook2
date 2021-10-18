import React from "react";

const styles = {
  container: {
    marginTop: "100px",
  },
  title: {
    fontWeight: 600,
    textAlign: "center",
  },
};
const HomeView = () => (
  <div style={styles.container}>
    <h1>
      Приветствуем!
      <br />
      Здесь вы можете хранить ваши контакты :)
    </h1>
  </div>
);

export default HomeView;
