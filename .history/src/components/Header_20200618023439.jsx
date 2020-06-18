import React from "react";
import { connect } from "react-redux";

const Header = ({}) => {
  return (
    <>
      <div style={styles.general}></div>
      <div style={styles.progressBar}></div>
    </>
  );
};

const styles = {
  general: {
    position: "absolute",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
    height: "72px",
    backgroundColor: "#fff",
  },
  progressBar: {
    height: "75px",
    width: `${progress}%`,
    backgroundColor: "#61AD15",
  },
};

const HeaderContainer = connect(
  (state) => ({
    progress: state.surveyReducer.progress,
  }),
  (dispatch) => ({})
)(Header);

export { HeaderContainer as Header };
