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
      <div style={styles.general}>
      <button
        disabled={disable}
        onClick={() => {
          navigatePrevPage();
        }}
      >
        Prev step
      </button>
      </div>
    );
  }
  if (!navigatePrevPage && navigateNextPage) {
    return (
      <div style={styles.general}>
      <button
        style={{position: ''}}
        disabled={disable}
        onClick={() => {
          navigateNextPage();
        }}
      >
        <span>Next step</span>
        <span style={styles.arrow}>&#8594;</span>
      </button>
      </div>
    );
  }
};

const styles = {
  general: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "72px",
    backgroundColor: "#fff",
    padding: '10px 10px',
    display: 'flex'
  },
  arrow: {
    marginLeft: '25px',
    transform: "matrix(1, 0, 0, -1, 0, 0)",
  },
};

export default Footer;
