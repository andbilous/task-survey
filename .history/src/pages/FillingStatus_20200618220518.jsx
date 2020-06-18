import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { setFillingStatus } from "../redux/survey/actions";
import Footer from "../components/Footer";

const FillingStatusPage = ({ setFillingStatus, employmentStatus }) => {
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
    setFillingStatus(values);
    history.push("/score");
  };

  const navigatePrevPage = () => {
    if (employmentStatus === "Employed" || employmentStatus === "Unemployed") {
      history.push("/employment-status");
    } else {
      history.push("/proprietorship");
    }
  };
  return (
    <>
    <div
      style={{
        backgroundColor: "#fff",
        marginTop: "6rem",
        marginLeft: "calc( 25% - 25px )",
        marginRight: "calc( 25% - 25px )",
      }}
    >
      <h2 style={{ marginLeft: '38px;}}>What best describes your filling status?</h2>
      <form style={styles.form}>
        <label style={styles.inputBox}>
          <input
          style={styles.input}
            type="checkbox"
            name="single"
            onClick={() => {
              handleChangeValues("single");
            }}
          ></input>
          Single
        </label>
        <label style={styles.inputBox}>
          <input
            type="checkbox"
            name="married-jointly"
            onClick={() => {
              handleChangeValues("married-jointly");
            }}
          ></input>
          Married filling jointly
        </label>

        <label style={styles.inputBox}>
          <input
            type="checkbox"
            name="head-household"
            onClick={() => {
              handleChangeValues("head-household");
            }}
          ></input>
          Head of Household
        </label>
        <label style={styles.inputBox}>
          <input
            type="checkbox"
            name="widow"
            onClick={() => {
              handleChangeValues("widow");
            }}
          ></input>
          Qualifying widow(-er) with dependent child
        </label>
      </form>
      
    </div>
    <Footer
    navigateNextPage={navigateNextPage}
    navigatePrevPage={navigatePrevPage}
  />
  </>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
  },
  inputBox:{
    height: '62px'
  },
  input: {
    marginRight: '20px',
    border: "1px solid black",
  },
};

const FillingStatusPageContainer = connect(
  (state) => ({
    employmentStatus: state.surveyReducer.employmentStatus,
  }),
  (dispatch) => ({
    setFillingStatus: (value) => dispatch(setFillingStatus(value)),
  })
)(FillingStatusPage);

export { FillingStatusPageContainer as FillingStatusPage };
