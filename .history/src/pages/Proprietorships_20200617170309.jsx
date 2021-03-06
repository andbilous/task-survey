import React from 'react';
import { useHistory } from "react-router-dom";
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
   
     <Footer
     navigateNextPage={navigateNextPage}
     navigatePrevPage={navigatePrevPage}
     />
    </div>
  )
}


export default ProprietorshipPage;