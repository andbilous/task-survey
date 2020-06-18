import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';


const ScorePage = () => {
  let history = useHistory();
  const navigateNextPage = () => {

  }

  const navigatePrevPage = () => {
    
  }
  return (
    <div>
      <h1>Ready to see your score?</h1>
      <Footer />
    </div>
  )
}


export default ScorePage;