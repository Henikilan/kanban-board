import React from "react";
import "./AddCardForm.css";

const AddCardForm = ({ onSubmit }) => (
  <form
    onSubmit={(e) => {
      onSubmit();
      e.preventDefault();
    }}
  >
    <label className="label">
      <input className="input" type="text" />
    </label>
    <button className="submit" type="submit">
      Submit
    </button>
  </form>
);
export default AddCardForm;
