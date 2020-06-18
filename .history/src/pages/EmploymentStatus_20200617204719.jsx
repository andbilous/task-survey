import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Footer from '../components/Footer';

const EmploymentStatusPage = (props) => {
  const [value,setValue] = useState('employed');
  const history = useHistory();

  const navigateNextPage = () =>{
    history.push("/filling-status");
  }

  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <form>
        <div id='1' style={{marginTop: '2rem', border: '1px solid black', display:'flex',flexDirection:'column'}} className="radio">
            <label><input onChange={handleChange} name='1' type="radio" value="Unemployed" />Employed</label>
            <label><input onChange={handleChange} name='1' type="radio" value="Unemployed" />Unemployed</label>
            <label><input onChange={handleChange} name='1' type="radio" value="SelfEmployed" />Self-employed</label>
        </div>
      </form>
      <Footer navigateNextPage={navigateNextPage}/>
    </div>
  );
};

export default EmploymentStatusPage;
