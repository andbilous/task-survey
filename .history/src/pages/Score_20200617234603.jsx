import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Footer from '../components/Footer';


const ScorePage = ({count}) => {
  const history = useHistory();
  

  const navigatePrevPage = () => {
    history.push("/proprietorship");
  }

  return (
    <div style={{ backgroundColor: "#fff", marginTop: "15rem" }}>
      <h1>Ready to see your score?</h1>
  <div>{count}</div>
      <Footer 
      navigatePrevPage={navigatePrevPage}
      />
    </div>
  )
}

const ScorePageContainer = connect(
  (state) => ({
    count : state.surveyReducer.count
  }), (dispatch) => ({
    // setFillingStatus: (value) => dispatch(setProprietorshipsCount(value))
  })
)(ScorePage)

export { ScorePageContainer as ScorePage }
