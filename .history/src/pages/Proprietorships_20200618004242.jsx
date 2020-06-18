import React from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {setProprietorshipsCount} from '../redux/survey/actions';
import Footer from '../components/Footer';


const ProprietorshipPage = ({setProprietorshipsCount}) => {
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
     <input type='text' />
     <Footer
     navigateNextPage={navigateNextPage}
     navigatePrevPage={navigatePrevPage}
     />
    </div>
  )
}
const ProprietorshipPageContainer = connect(
  (state) => ({
  }), (dispatch) => ({
    setProprietorshipsCount: (values) => dispatch(setProprietorshipsCount(values))
  })
)(ProprietorshipPage)

export { ProprietorshipPageContainer as ProprietorshipsPage }
