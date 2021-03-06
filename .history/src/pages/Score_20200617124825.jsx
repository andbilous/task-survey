import React from 'react';
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';


const ScorePage = () => {
  const history = useHistory();
  

  const navigatePrevPage = () => {
    history.push("/proprietorship");
  }
  return (
    <div>
      <h1>Ready to see your score?</h1>
      <Footer 
      navigatePrevPage={navigatePrevPage}
      />
    </div>
  )
}


export default ScorePage;