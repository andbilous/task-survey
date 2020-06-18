import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Footer from '../components/Footer';
import {setEmploymentStatus} from '../redux/survey/actions';

const EmploymentStatusPage = ({setEmploymentStatus}) => {
  const history = useHistory();
  const [value,setValue] = useState('Employed');


  const navigateNextPage = () =>{
    history.push("/filling-status");
  }

  const handleChange=(e)=>{
    if(e.target.value==='Employed'){}
    setValue(e)
    setEmploymentStatus(value);
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <form>
        <div id='1' style={{marginTop: '2rem', border: '1px solid black', display:'flex',flexDirection:'column'}} className="radio">
            <label><input onChange={handleChange} name='1' type="radio" value="Employed" />Employed</label>
            <label><input onChange={handleChange} name='1' type="radio" value="Unemployed" />Unemployed</label>
            <label><input onChange={handleChange} name='1' type="radio" value="SelfEmployed" />Self-employed</label>
        </div>
      </form>
      <Footer navigateNextPage={navigateNextPage}/>
    </div>
  );
};

const EmploymentStatusPageContainer = connect(
  (state) => ({
  }), (dispatch) => ({
    setEmploymentStatus: (value) => dispatch(setEmploymentStatus())
  })
)(EmploymentStatusPage)

export { EmploymentStatusPageContainer as EmploymentStatusPage }
