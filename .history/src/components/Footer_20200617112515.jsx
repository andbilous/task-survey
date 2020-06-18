import React from "react";
import { useHistory } from "react-router-dom";


const Footer = ({navigateNextPage}) => {
  return <div style={styles.general}>
    <button onClick={()=>{navigateNextPage)}}>Next page</button>
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
