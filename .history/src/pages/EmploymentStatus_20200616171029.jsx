import React from "react";

const EmploymentStatusPage = () => {
  return (
    <div style={{ backgroundColor: "#333", }}>
      <h1>What is your employment status?</h1>
      <form style={{ marginTop: "15rem" }}>
        <div className="radio">
          <label>
            <input type="radio" value="option1" checked={true} />
            Option 1
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2" />
            Option 2
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3" />
            Option 3
          </label>
        </div>
      </form>
    </div>
  );
};

export default EmploymentStatusPage;
