import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setFillingStatus } from "../redux/survey/actions";
import Footer from "../components/Footer";

const FillingStatusPage = ({setFillingStatus,employmentStatus}) => {
  const history = useHistory();
  const [values, setValues] = useState([]);

  const handleChangeValues = (value) => {
    if (values.includes(value)) {
      setValues(values.filter((item) => item !== value));
    } else {
      setValues([...values, value]);
    }
  };

  const navigateNextPage = () => {
    setFillingStatus(values)
    history.push("/score");
  };

  const navigatePrevPage = () => {
    if(employmentStatus==='Employed' || employmentStatus==='Unemployed' ){
      history.push("/employment-status");
    }else{
      history.push("/proprietorship");
    }

  };
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "15rem" }}>
     
      <form>
      <h1>What best describes your filling status?</h1>
        <input
          type="checkbox"
          name="single"
          onClick={() => {
            handleChangeValues("single");
          }}
        ></input>
        <label for="single">Single</label>
        <input
          type="checkbox"
          name="married-jointly"
          onClick={() => {
            handleChangeValues("married-jointly");
          }}
        ></input>
        <label for="married-jointly">Married filling jointly</label>
        <input
          type="checkbox"
          name="married-separately"
          onClick={() => {
            handleChangeValues("married-separately");
          }}
        ></input>
        <label for="married-separately">Married filling separately</label>
        <input
          type="checkbox"
          name="head-household"
          onClick={() => {
            handleChangeValues("head-household");
          }}
        ></input>
        <label for="head-household">Head of Household</label>
        <input
          type="checkbox"
          name="widow"
          onClick={() => {
            handleChangeValues("widow");
          }}
        ></input>
        <label for="widow">Qualifying widow(-er) with dependent child</label>
      </form>
      <Footer
        navigateNextPage={navigateNextPage}
        navigatePrevPage={navigatePrevPage}
      />
    </div>
  );
};

const styles={
  form:{
    display: 'flex',
    flexDirection: 'column'
  }
}


const FillingStatusPageContainer = connect(
  (state) => ({
    employmentStatus: state.surveyReducer.employmentStatus
  }),
  (dispatch) => ({
    setFillingStatus: (value) => dispatch(setFillingStatus(value)),
  })
)(FillingStatusPage);

export { FillingStatusPageContainer as FillingStatusPage };
