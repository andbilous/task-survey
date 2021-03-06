import React from "react";

const EmploymentStatusPage = () => {
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <form>
        <div style={{mar}} className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option1" checked={true} />
            Employed
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option2" />
            Unemployed
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option3" />
            Self-employed
          </label>
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusPage;
