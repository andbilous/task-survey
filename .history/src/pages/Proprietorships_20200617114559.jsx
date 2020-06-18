import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';


const ProprietorshipPage = () => {
  let history = useHistory();
  const navigateNextPage = () =>{
    history.push("/filling-status");
  }
  const navigatePrevPage = () => {
    
  }
  return (
    <div>
     <h1>What best describes your filing status?</h1>
     <Footer/>
    </div>
  )
}


export default ProprietorshipPage;