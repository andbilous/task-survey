import React from "react";

const Footer = ({ disable, navigateNextPage, navigatePrevPage }) => {
  if (navigatePrevPage && navigateNextPage) {
    return (
      <div style={styles.general}>
        <button
          disable={disable}
          onClick={() => {
            navigatePrevPage();
          }}
        >
          Prev step
        </button>
        <button
        disable={disable}
          onClick={() => {
            navigateNextPage();
          }}
        >
          Next step
        </button>
      </div>
    );
  }
  if (navigatePrevPage && !navigateNextPage) {
    return (
      <button
        onClick={() => {
          navigatePrevPage();
        }}
      >
        Prev step
      </button>
    );
  }
  if (!navigatePrevPage && navigateNextPage) {
    return (
      <button
        onClick={() => {
          navigateNextPage();
        }}
      >
        Next step
      </button>
    );
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
