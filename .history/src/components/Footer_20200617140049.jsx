import React from "react";

const Footer = ({ navigateNextPage,navigatePrevPage }) => {
  if(navigatePrevPage && navigateNextPage){
    return (
      <div style={styles.general}>
      <button
        onClick={() => {
          navigatePrevPage();
        }}
      >
        Prev page
      </button>
      <button
        onClick={() => {
          navigateNextPage();
        }}
      >
        Next page
      </button>
    </div>
    )
  }
  if(navigatePrevPage && !navigateNextPage){

  }
  if(!navigatePrevPage && navigateNextPage){

  }
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
