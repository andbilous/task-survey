import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {setFillingStatus} from '../redux/survey/actions';
import Footer from "../components/Footer";

const FillingStatusPage = () => {
  const history = useHistory();

  const navigateNextPage = () => {
    history.push("/proprietorship");
  };

  const navigatePrevPage = () => {
    history.push("/employment-status");
  };
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "15rem" }}>
      <h1>What best describes your filling status?</h1>
      <form>
      <input type="checkbox" id="single" name="single"
       onClick={()=>{console.log('sing')}}>

       </input>
      <label for="single">Single</label>
      <input type="checkbox" id="married-jointly" name="married-jointly"></input>
      <label for="married-jointly">Married filling jointly</label>
      <input type="checkbox" id="married-separately" name="married-separately"></input>
      <label for="married-separately">Married filling separately</label>
      <input type="checkbox" id="head-household" name="head-household"></input>
      <label for="head-household">Head of Household</label>
      <input type="checkbox" id="widow" name="widow"></input>
      <label for="widow">Qualifying widow(-er) with dependent child</label>
      </form>
      <Footer
        navigateNextPage={navigateNextPage}
        navigatePrevPage={navigatePrevPage}
      />
    </div>
  );
};
const FillingStatusPageContainer = connect(
  (state) => ({
  }), (dispatch) => ({
    setFillingStatus: (value) => dispatch(setFillingStatus(value))
  })
)(FillingStatusPage)

export { FillingStatusPageContainer as FillingStatusPage }
