import React from "react";

const Footer = ({ disable, navigateNextPage, navigatePrevPage }) => {
  if (navigatePrevPage && navigateNextPage) {
    return (
      <div style={styles.general}>
        <button
          disabled={disable}
          onClick={() => {
            navigatePrevPage();
          }}
        >
          Prev step
        </button>
        <button
          disabled={disable}
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
        disabled={disable}
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
        style={styles.button}
        disabled={disable}
        onClick={() => {
          navigateNextPage();
        }}
      >
        <span></span>
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
  button: {
    color: "#fff",
    width: "148px",
    height: "48px",
    background: "#61AD15",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "26px",
    borderRadius: "4px",
  },
};

export default Footer;
