import React from "react";
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';

const FillingStatusPage = () => {
  const history = useHistory();

  const navigateNextPage = () =>{
    history.push("/proprietorship");
  }
  const navigatePrevPage = () => {
    history.push("/employment-status");

  }
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "15rem" }}>
      <h1>How many separate sole proprietorships do you operate?</h1>

      <input type="text" />
      <Footer
       navigateNextPage={navigateNextPage}
      
      />
    </div>
  );
};

export default FillingStatusPage;
