import React from "react";

const EmploymentStatusPage = () => {
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <form>
        <div className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option1" checked={true} />
            Employed
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option2" />
            Employed
          </label>
        </div>
        <div className="radio">
          <label>
            <input onChange={handleChange} name='1' type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusPage;
