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
    position: absolute,
left: '0%',
right: '0%',
top: '0%,
bottom: 0%,
    height: "133px",
    backgroundColor: "#fff",
  },
  progressBar: {
    height: "72px",
    width: '100%',
    backgroundColor: "#61AD15",
  },
};

export default Header;
