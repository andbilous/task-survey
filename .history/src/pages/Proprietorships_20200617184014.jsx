import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import Footer from '../components/Footer';


const ProprietorshipPage = () => {
  const history = useHistory();

  const navigateNextPage = () => {
    history.push("/score");
  }
  const navigatePrevPage = () => {
    history.push("/filling-status");
  }
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "15rem" }}>
     <h1>How many separate sole proprietorships do you operate?</h1>
     <Footer
     navigateNextPage={navigateNextPage}
     navigatePrevPage={navigatePrevPage}
     />
    </div>
  )
}


export default ProprietorshipPage;