import React from 'react';


const EmploymentStatusPage = () => {
  return (
    <form style={{marginTop: }}>
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
  )
}


export default EmploymentStatusPage;