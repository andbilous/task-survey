import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Footer from '../components/Footer';
import {setEmploymentStatus} from '../redux/survey/actions';

const EmploymentStatusPage = ({setEmploymentStatus}) => {
  const [value,setValue] = useState('');
  const history = useHistory();

  const navigateNextPage = () =>{
    history.push("/filling-status");
  }

  const handleChange=(e)=>{
    setValue(e.target.value);
    setEmploymentStatus
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
    users: state.usersReducer.users,
    userData: state.usersReducer.userData
  }), (dispatch) => ({
    setEmploymentStatus: (value) => dispatch(setEmploymentStatus()),
    getUserData: (id) => dispatch(getUserData(id))
  })
)(EmploymentStatusPage)

export { EmploymentStatusPageContainer as EmploymentStatusPage }
