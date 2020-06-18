import React from "react";
import { useHistory } from "react-router-dom";
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
      <input type="checkbox" id="single" name="single"></input>
      <label for="single">Single</label>
      <input type="checkbox" id="married-jointly" name="married-jointly"></input>
      <label for="married-jointly">Married filling jointly</label>
      <input type="checkbox" id="married-separately" name="married-separately"></input>
      <label for="married-separately">Married filling separately</label>
      <input type="checkbox" id="head-household" name="head-household"></input>
      <label for="horns">Head of Household</label>
      <input type="checkbox" id="widow" name="widow"></input>
      <label for="horns">Qualifying widow(-er) with dependent child</label>
      <Footer
        navigateNextPage={navigateNextPage}
        navigatePrevPage={navigatePrevPage}
      />
    </div>
  );
};

export default FillingStatusPage;
