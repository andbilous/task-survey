import React from "react";

const EmploymentStatusPage = () => {
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <FormControl component="fieldset">
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
    </FormControl>
      {/* <form>
        <div style={{marginTop: '2rem',border: '1px solid black'}} className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option1" checked={true} />
            Employed
          </label>
        </div>
        <div style={{marginTop: '2rem',border: '1px solid black'}} className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option2" />
            Unemployed
          </label>
        </div>
        <div style={{marginTop: '2rem', border: '1px solid black'}} className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option3" />
            Self-employed
          </label>
        </div>
      </form> */}
    </div>
  );
};

export default EmploymentStatusPage;
