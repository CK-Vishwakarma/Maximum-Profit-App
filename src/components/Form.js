import React, { useEffect, useRef, useState } from "react";

const Form = ({ calculateFunction }) => {
  const [inputAmt, setInputAmt] = useState(0);
  const refInpAmt = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let inputValue = Number.parseFloat(refInpAmt.current.value);

    if (inputValue < 30) {
      alert("Minimum amount to invest Rs.30");
    } else if (!isNaN(inputValue)) {
      setInputAmt(inputValue);
    } else {
      alert("Enter valid amount");
    }
  };

  useEffect(() => {
    calculateFunction(inputAmt);
    refInpAmt.current.focus();
  }, [inputAmt]);
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter amount
        </label>
        <input
          ref={refInpAmt}
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby=" enter amount "
        />
        <div className="form-text">Enter valid amount.</div>
      </div>

      <button type="submit" className="btn btn-primary">
        Calculate
      </button>
    </form>
  );
};

export default Form;
