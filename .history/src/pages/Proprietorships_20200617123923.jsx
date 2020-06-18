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
    <div>
     <h1>What best describes your filing status?</h1>
     <Footer/>
    </div>
  )
}


export default ProprietorshipPage;