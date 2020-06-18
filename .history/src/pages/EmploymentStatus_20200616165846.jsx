import React from 'react';


const EmploymentStatusPage = () => {
  return (
    
    <div  style={{marginTop: '15rem'}}>
      <h1>What is your employment status?</h1>
      <div>
    <input type="radio" id="contactChoice1"
     name="contact" value="email">
    <label for="contactChoice1">Email</label>

    <input type="radio" id="contactChoice2"
     name="contact" value="phone">
    <label for="contactChoice2">Phone</label>

    <input type="radio" id="contactChoice3"
     name="contact" value="mail">
    <label for="contactChoice3">Mail</label>
  </div>
  <div>
    </div>
  )
}


export default EmploymentStatusPage;