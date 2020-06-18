import React from "react";
import { connect } from "react-redux";

const Header = ({progress}) => {
  return (
    <>
      <div style={styles.general}></div>
      <div style></div>
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
