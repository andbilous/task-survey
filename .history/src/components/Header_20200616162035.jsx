import React from "react";

const Header = () => {
  return (
    <div style={styles.general}>
      Header
      <div style={styles.progressBar}></div>
    </div>
  );
};

const styles = {
  general: {
    height: "133px",
    backgroundColor: "#fff",
  },
  progressBar: {
    height: "133px",
    backgroundColor: "#61AD15",
  },
};

export default Header;
