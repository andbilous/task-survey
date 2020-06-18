import React from "react";
import { connect } from "react-redux";

const Header = ({progress}) => {
  return (
    <>
      <div style={styles.general}></div>
      <div style={{width:`${progress}%`, height: "75px",}}></div>
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
   
    
  },
};

const HeaderContainer = connect(
  (state) => ({
    progress: state.surveyReducer.progress,
  }),
  (dispatch) => ({})
)(Header);

export { HeaderContainer as Header };
