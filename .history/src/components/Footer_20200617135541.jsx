import React from "react";

const Footer = ({ navigateNextPage,navigatePrevPage }) => {
  if(navigatePrevPage && navigateNextPage){
    return (

    )
  }
  return (
   
  );
};

const styles = {
  general: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "2.5rem",
    backgroundColor: "#fff",
  },
};

export default Footer;
