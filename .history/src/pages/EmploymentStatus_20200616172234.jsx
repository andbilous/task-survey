import React from "react";

const EmploymentStatusPage = () => {
  const handleChange
  return (
    <div style={{ backgroundColor: "#fff",marginTop: "15rem" }}>
      <h1>What is your employment status?</h1>
      <form>
        <div className="radio">
          <label>
            <input name='1' type="radio" value="option1" checked={true} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input name='1' type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input name='1' type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusPage;
