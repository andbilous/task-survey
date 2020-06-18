import React from "react";

const Footer = () => {
  return <div style={styles.general}>
    <button>Next step =></button>
  </div>;
};

const styles = {
  general: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
    backgroundColor: '#fff'
  },
};

export default Footer;
