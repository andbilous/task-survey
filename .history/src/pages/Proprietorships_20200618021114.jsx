import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {setProprietorshipsCount} from '../redux/survey/actions';
import Footer from '../components/Footer';


const ProprietorshipPage = ({setProprietorshipsCount}) => {
  const history = useHistory();
  const [disableFooter,setDisableFooter] = useState(true);

  const handleChange = (value) =>{
    let number = parseInt(value);
    if(number>0){

    }

  }
  const navigateNextPage = () => {
    history.push("/filling-status");
  }
  const navigatePrevPage = () => {
    history.push("/employment-status");
  }
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "15rem" }}>
     <h1>How many separate sole proprietorships do you operate?</h1>
     <input type='number' 
     onChange={(e)=>{}}/>
     <Footer
     disable={disableFooter}
     navigateNextPage={navigateNextPage}
     navigatePrevPage={navigatePrevPage}
     />
    </div>
  )
}
const ProprietorshipPageContainer = connect(
  (state) => ({
  }), (dispatch) => ({
    setProprietorshipsCount: (value) => dispatch(setProprietorshipsCount(value))
  })
)(ProprietorshipPage)

export { ProprietorshipPageContainer as ProprietorshipsPage }
