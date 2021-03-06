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
      <input type="checkbox" id="horns" name="horns"></input>
      <label for="horns">Single</label>
      <input type="checkbox" id="horns" name="horns"></input>
      <label for="horns">Married filling jointly</label>
      <input type="checkbox" id="horns" name="horns"></input>
      <label for="horns">Married filling separately</label>
      <input type="checkbox" id="horns" name="horns"></input>
      <label for="horns">Head</label>
      <Footer
        navigateNextPage={navigateNextPage}
        navigatePrevPage={navigatePrevPage}
      />
    </div>
  );
};

export default FillingStatusPage;
