import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import Footer from '../components/Footer';

const EmploymentStatusPage = (props) => {
  const [value,setValue] = useState('Employed');
  let history = useHistory();

  const navigateNextPage = ()=>{
    history.push("/")
  }

  const handleChange=(e)=>{
     history.push("/")
    console.log(e.target.value)
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      {/* <FormControl component="fieldset">
      <FormLabel component="legend">Gender</FormLabel>
      <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
        <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
        <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
        <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<StyledRadio />}
          label="(Disabled option)"
        />
      </RadioGroup>
    </FormControl> */}
      <form>
        <div id='1' style={{marginTop: '2rem',border: '1px solid black', display:'flex',flexDirection:'column'}} className="radio">
            <label><input onChange={handleChange} name='1' type="radio" value={value} />Employed</label>
            <label><input onChange={handleChange} name='1' type="radio" value="Unemployed" />Unemployed</label>
            <label><input onChange={handleChange} name='1' type="radio" value="SelfEmployed" />Self-employed</label>
        </div>
      </form>
      <Footer nextBtn={}/>
    </div>
  );
};

export default EmploymentStatusPage;
