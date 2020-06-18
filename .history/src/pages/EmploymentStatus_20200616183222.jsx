import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const EmploymentStatusPage = () => {
  const handleChange=(e)=>{
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
        <div id='1' style={{marginTop: '2rem',border: '1px solid black'}} className="radio">
            <input onChange={handleChange} name='1' type="radio" value="Employed" checked={true} />
            <input onChange={handleChange} name='1' type="radio" value="option2" />

        </div>
        <div style={{marginTop: '2rem',border: '1px solid black'}} className="radio">
          <label>
           
            Unemployed
          </label>
        </div>
        <div style={{marginTop: '2rem', border: '1px solid black'}} className="radio">
          <label>
          
            Self-employed
          </label>
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusPage;
