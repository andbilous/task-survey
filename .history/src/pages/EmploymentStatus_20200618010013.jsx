import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Footer from '../components/Footer';
import {setEmploymentStatus} from '../redux/survey/actions';

const EmploymentStatusPage = ({setEmploymentStatus}) => {
  const history = useHistory();
  const [disableFooter,setDisableFooter] = useState(true);
  const [value,setValue] = useState('');


  const navigateNextPage = () =>{
    if(value === 'Employed' || value === 'Unemployed'){
     
    }else{
      history.push("/filling-status");
    }
  }

  const handleChange= (value) => {
    console.log(value)
    setDisableFooter(false);
    setEmploymentStatus(value);
    setValue(value);
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <form>
        <div id='1' style={{marginTop: '2rem', border: '1px solid black', display:'flex',flexDirection:'column'}} className="radio">
            <label><input onClick={()=>handleChange("Employed")} name='1' type="radio" value="Employed" />Employed</label>
            <label><input onClick={()=>handleChange("Unemployed")} name='1' type="radio" value="Unemployed" />Unemployed</label>
            <label><input onClick={()=>handleChange("SelfEmployed")} name='1' type="radio" value="SelfEmployed" />Self-employed</label>
        </div>
      </form>
      <Footer disable={disableFooter}  navigateNextPage={navigateNextPage}/>
    
    </div>
  );
};

const EmploymentStatusPageContainer = connect(
  (state) => ({
  }), (dispatch) => ({
    setEmploymentStatus: (value) => dispatch(setEmploymentStatus(value))
  })
)(EmploymentStatusPage)

export { EmploymentStatusPageContainer as EmploymentStatusPage }
