import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "../components/Footer";
import { setEmploymentStatus } from "../redux/survey/actions";

const EmploymentStatusPage = ({ setEmploymentStatus }) => {
  const history = useHistory();
  const [disableFooter, setDisableFooter] = useState(true);
  const [value, setValue] = useState("");

  const navigateNextPage = () => {
    if (value === "Employed" || value === "Unemployed") {
      history.push("/filling-status");
    } else {
      history.push("/proprietorship");
    }
  };

  const handleChange = (value) => {
    console.log(value);
    setDisableFooter(false);
    setEmploymentStatus(value);
    setValue(value);
  };
  return (
    <div style={{ marginTop: "7rem" }}>
      
      <form>
        <div
          style={styles.parent}
          className="radio"
        >
          <h2>What is your employment status?</h2>
          <label className="list-item" style={{paddingRight: '350px',borderRadius: '4px 4px 0px 0px'}}>
            <input
              style={styles.input}
              onClick={() => handleChange("Employed")}
              name="1"
              type="radio"
              value="Employed"
            />
            Employed
          </label>
          <label className="list-item" style={{
            paddingRight: '334px'
            }}>
            <input
              style={styles.input}
              onClick={() => handleChange("Unemployed")}
              name="1"
              type="radio"
              value="Unemployed"
            />
            Unemployed
          </label>
          <label className="list-item" style={{paddingRight: '324px',  boxShadow: 'inset 0px -1px 0px #DEE0E8'}}>
            <input
              style={styles.input}
              onClick={() => handleChange("SelfEmployed")}
              type="radio"
              value="SelfEmployed"
            />
            Self-employed
          </label>
          </div>
      </form>
      <Footer disable={disableFooter} navigateNextPage={navigateNextPage} />
    </div>
  );
};

const styles = {
  parent: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  item: {
    width: "544px",
    height: "66px",
    border: "1px solid black",
    paddingTop: '21px',
  },
  input :{
    marginRight: '40px'
  }
};

const EmploymentStatusPageContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    setEmploymentStatus: (value) => dispatch(setEmploymentStatus(value)),
  })
)(EmploymentStatusPage);

export { EmploymentStatusPageContainer as EmploymentStatusPage };
